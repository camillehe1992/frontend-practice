console.log("--------------- proxy-this -----------------");

// 虽然Proxy完成了对目标对象的代理，但是它不是透明代理,也就是说：即使handler为空对象（即不做任何代理），
// 他所代理的对象中的this指向也不是该对象，而是proxyObj对象。让我们来看一个例子

const _name = new WeakMap();

class Person2 {
  constructor(name) {
    _name.set(this, name);
  }
  get name() {
    console.log(this);
    return _name.get(this);
  }
}

const jane = new Person2("Jane");
console.log(jane.name); // Jane

const proxyObj2 = new Proxy(jane, {});
console.log(proxyObj2.name); // undefined

// jane对象的name属性的获取依靠this的指向，而this又指向proxyObj，所以导致了无法正常代理。

// 除此之外，有的js内置对象的内部属性，也依靠正确的this才能获取，所以Proxy 也无法代理这些原生对象的属性。请看下面一个例子

let proxyDate = new Proxy(new Date(), {});

// console.log(proxyDate.getDate());
// type error

// 可以看到，通过proxy代理访问Date对象中的getDate方法时抛出了一个错误，这是因为getDate方法只能在Date对象实例上面拿到，
// 如果this不是Date对象实例就会报错。那么我们要如何解决这个问题呢？只要手动把this绑定在Date对象实例上即可，请看下面一个例子

const proxy = new Proxy(new Date("2015-01-01"), {
  get(target, prop) {
    if (prop === "getDate") {
      return target.getDate.bind(target);
    }
    return Reflect.get(target, prop);
  },
});
console.log(proxy.getDate()); // 1
