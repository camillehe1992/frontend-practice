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
