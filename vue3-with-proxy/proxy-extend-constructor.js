console.log("--------------- extend constructor -----------------");

function extend(sup, base) {
  base.prototype = Object.create(sup.prototype);
  base.prototype.constructor = new Proxy(base, {
    construct: function (target, args) {
      var obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
    },
    apply: function (target, that, args) {
      sup.apply(that, args);
      base.apply(that, args);
    },
  });
  return base.prototype.constructor;
}

var Person = function (name) {
  this.name = name;
};

var Boy = extend(Person, function (name, age) {
  this.age = age;
});

Boy.prototype.gender = "M";

var Peter = new Boy("Peter", 13);

console.log(Peter.gender); // "M"
console.log(Peter.name); // "Peter"
console.log(Peter.age); // 13
