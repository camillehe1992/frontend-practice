// 是不是感觉有点复杂？事实上，在上面的讲述中，我们还有问题没有解决：那就是当我们要给对象新增加一个属性时，也需要手动去监听这个新增属性。

// 也正是因为这个原因，使用vue给 data 中的数组或对象新增属性时，需要使用 vm.$set 才能保证新增的属性也是响应式的。

// 可以看到，通过Object.definePorperty()进行数据监听是比较麻烦的，需要大量的手动处理。这也是为什么在Vue3.0中尤雨溪转而采用Proxy。接下来让我们一起看一下Proxy是怎么解决这些问题的吧~

console.log("-------------- Proxy --------------");

// 语法：const p = new Proxy(target, handler)

// 参数:

// target:要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）
// handler:一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。
// 通过Proxy，我们可以对设置代理的对象上的一些操作进行拦截，外界对这个对象的各种操作，都要先通过这层拦截。（和defineProperty差不多）

let student = {
  firstname: "James",
  lastname: "Smith",
  age: 18,
  school: "MIT",
  hobbies: ["hiking"],
  friends: [
    {
      name: "Alice",
    },
  ],
};

let handler = {
  get(obj, key) {
    return key in obj ? obj[key] : undefined;
  },
  set(obj, key, val) {
    obj[key] = val;
    return true;
  },
};

let proxyObj = new Proxy(student, handler);

// 可监听对象全部属性，不需要遍历
console.log(proxyObj);
console.log(proxyObj.school);
console.log(proxyObj.age);

// 可深度监听对象属性，不需要递归监听
console.log(proxyObj.friends[0]);
proxyObj.friends[0].age = 19;
console.log(proxyObj.friends[0]);

// 可自动监听新增属性，不需要手动监听
console.log(proxyObj.fullname);
proxyObj.fullname = `${proxyObj.lastname}, ${proxyObj.firstname}`;
console.log(proxyObj.fullname);

// 可监听数组，即使是用push unshift 方法增加的元素也可监听
proxyObj.hobbies.push("running");
console.log(proxyObj.hobbies);

// 可以看出，Proxy代理的是整个对象，而不是对象的某个特定属性，不需要我们通过遍历来逐个进行数据绑定。

// 值得注意的是:之前我们在使用Object.defineProperty()给对象添加一个属性之后，我们对对象属性的读写操作仍然在对象本身。
// 但是一旦使用Proxy，如果想要读写操作生效，我们就要对Proxy的实例对象proxyObj进行操作。

// 另外，MDN上明确指出set()方法应该返回一个布尔值，否则会报错TypeError。
