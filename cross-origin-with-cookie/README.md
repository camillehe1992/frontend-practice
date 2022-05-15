## 如何解决跨域携带 cookie 问题

- 在前端请求的时候设置 request 对象的属性 `withCredentials` 为 true;

什么是 withCredentials？

XMLHttpRequest.withCredentials 属性是一个 Boolean 类型，它指示了是否该使用类似 cookies,authorization headers(头部授权)或者 TLS 客户端证书这一类资格证书来创建一个跨站点访问控制（cross-site Access-Control）请求。在同一个站点下使用 withCredentials 属性是无效的。

如果在发送来自其他域的 XMLHttpRequest 请求之前，未设置 withCredentials 为 true，那么就不能为它自己的域设置 cookie 值。而通过设置 withCredentials 为 true 获得的第三方 cookies，将会依旧享受同源策略，因此不能被通过 document.cookie 或者从头部相应请求的脚本等访问。

```
// 修改跨域请求的代码
crossButton.onclick = function () {
    axios({
      withCredentials: true, // ++ 新增
      method: "get",
      url: "http://localhost:8003/anotherService",
    }).then((res) => {
      console.log(res);
    });
};
```

修改服务端设置

```
// 在所有路由前增加，可以拦截所有请求
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8000");
  res.header("Access-Control-Allow-Credentials", "true"); // ++ 新增
  next();
});
```

### 关于 CORS 相关的 response headers 及其释义

- Access-Control-Allow-Origin: 可以把资源共享给那些域名，支持 \* 及 特定域名
- Access-Control-Allow-Credentials: 请求是否可以带 cookie
- Access-Control-Allow-Methods: 请求所允许的方法, 「用于预请求 (preflight request) 中」
- Access-Control-Allow-Headers: 请求所允许的头，「用于预请求 (preflight request) 中」
- Access-Control-Expose-Headers: 那些头可以在响应中列出
- Access-Control-Max-Age: 预请求的缓存时间

### CORS 与 Vary: Origin

如果 static.shanyue.tech 资源被 CDN 缓存，bar.shanyue.tech 再次访问资源时，因缓存问题，因此此时返回的是 Access-Control-Allow-Origin: foo.shanyue.tech，此时会有跨域问题。此时，`Vary: Origin` 就上场了，代表为不同的 `Origin` 缓存不同的资源。

### HSTS 与 CORS

HSTS (HTTP Strict Transport Security) 为了避免 HTTP 跳转到 HTTPS 时遭受潜在的中间人攻击，由浏览器本身控制到 HTTPS 的跳转。如同 CORS 一样，它也是有一个服务器的响应头来控制
`Strict-Transport-Security: max-age=5184000`
此时浏览器访问该域名时，会使用 307 Internal Redirect，无需服务器干涉，自动跳转到 HTTPS 请求。如果前端访问 HTTP 跨域请求，此时浏览器通过 HSTS 跳转到 HTTPS，但浏览器不会给出相应的 CORS 响应头部，就会发生跨域问题。

### 服务器异常处理与跨域异常

当与其他中间件一起工作时，也有可能出现问题，由于不正确的执行顺序也可能导致跨域失败。

假设有一个参数校验中间件，置于 CORS 中间件上方，由于校验失败，并未穿过 CORS 中间件，在前端会报错跨域失败，真正的参数校验问题掩盖其中。
