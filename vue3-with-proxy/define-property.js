// Object.defineProperty()

console.log("-------------- Object.defineProperty() --------------");

// 1. 基本使用
// /**
//  * Adds a property to an object, or modifies attributes of an existing property.
//  * @param o Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
//  * @param p The property name.
//  * @param attributes Descriptor for the property. It can be for a data property or an accessor property.
//  */
//  defineProperty<T>(o: T, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): T;

// 作用：在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象。

let person = {};

let personName = "Alice";

//在person对象上添加属性namep,值为personName
Object.defineProperty(person, "namep", {
  //但是默认是不可枚举的(for in打印打印不出来)，可：enumerable: true
  //默认不可以修改，可：wirtable：true
  //默认不可以删除，可：configurable：true
  get: function () {
    console.log("emit get method");
    return personName;
  },
  set: function (val) {
    console.log("emit set method");
    personName = val;
  },
});

//当读取person对象的namp属性时，触发get方法
console.log(person.namep);

//当修改personName时，重新访问person.namep发现修改成功
personName = "Bob";
console.log(person.namep);

//当修改personName时，重新访问person.namep发现修改成功
person.namep = "John";
console.log(person.namep);

// 深度监听一个对象
function defineProperty(obj, key, val) {
  //如果某对象的属性也是一个对象，递归进入该对象，进行监听
  if (typeof val === "object") {
    Observer(val);
  }
  Object.defineProperty(obj, key, {
    get() {
      console.log(`access property ${key}`);
      return val;
    },
    set(newVal) {
      // 如果newVal是一个对象，递归进入该对象进行监听
      if (typeof newVal === "object") {
        Observer(key);
      }
      console.log(`property ${key} is updated to ${newVal}`);
      val = newVal;
    },
  });
}

// 为了避免循环触发get方法，导致递归调用，最终栈溢出，需要设置一个中转Obsever，
// 来让get中return的值并不是直接访问obj[key]
function Observer(obj) {
  //如果传入的不是一个对象，return
  if (typeof obj !== "object" || obj === null) {
    return;
  }
  Object.keys(obj).forEach((key) => {
    defineProperty(obj, key, obj[key]);
  });
}

// 4.监听数组
let arr = [1, 2, 3];
let obj = {};
//把arr作为obj的属性监听
Object.defineProperty(obj, "arr", {
  get() {
    console.log("get arr");
    return arr;
  },
  set(newVal) {
    console.log("set", newVal);
    arr = newVal;
  },
});
console.log(obj.arr); //输出get arr [1,2,3]  正常
obj.arr = [1, 2, 3, 4]; //输出set [1,2,3,4] 正常
obj.arr.push(3); //输出get arr 不正常，监听不到push

// 事实上，通过索引访问或者修改数组中已经存在的元素，是可以触发get和set的，但是对于通过push、unshift增加的元素，会增加一个索引，这种情况需要手动初始化，新增加的元素才能被监听到。另外，通过 pop 或 shift 删除元素，会删除并更新索引，也会触发 setter 和 getter 方法。
// 在Vue2.x中，通过重写Array原型上的方法解决了这个问题，此处就不展开说了，有兴趣的uu可以再去了解下~
