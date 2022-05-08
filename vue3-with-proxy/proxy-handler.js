// interface ProxyHandler<T extends object> {
//   apply?(target: T, thisArg: any, argArray: any[]): any;
//   construct?(target: T, argArray: any[], newTarget: Function): object;
//   defineProperty?(target: T, p: string | symbol, attributes: PropertyDescriptor): boolean;
//   deleteProperty?(target: T, p: string | symbol): boolean;
//   get?(target: T, p: string | symbol, receiver: any): any;
//   getOwnPropertyDescriptor?(target: T, p: string | symbol): PropertyDescriptor | undefined;
//   getPrototypeOf?(target: T): object | null;
//   has?(target: T, p: string | symbol): boolean;
//   isExtensible?(target: T): boolean;
//   ownKeys?(target: T): ArrayLike<string | symbol>;
//   preventExtensions?(target: T): boolean;
//   set?(target: T, p: string | symbol, value: any, receiver: any): boolean;
//   setPrototypeOf?(target: T, v: object | null): boolean;
// }

console.log("--------------- ProxyHandler -----------------");

let user = {
  id: "000000111",
  name: "Bob",
  birthday: {
    day: "22",
    month: "03",
    year: "2000",
  },
  photoNum: "123456789",
  level: 1,
  point: "666",
  activities: [
    {
      timestamp: "1111111111",
      change: 14,
    },
    {
      timestamp: "222222222",
      change: 16,
    },
  ],
};

let proxyUser = new Proxy(user, {
  // set default value
  get(obj, key) {
    console.log("get emitted");
    return key in obj ? obj[key] : undefined;
  },
  // validate
  set(obj, key, val) {
    console.log("set emitted");
    if (key === "level" && !Number.isInteger(val)) {
      throw new TypeError("The level is not an interger");
    }
    obj[key] = val;
    return true;
  },
});

// proxyUser.level++;
// console.log(user.level);

proxyUser.activities.push({
  timestamp: "33333333333",
  change: 11,
});
console.log(proxyUser.activities);

proxyUser.activities.pop();
console.log(proxyUser.activities);
