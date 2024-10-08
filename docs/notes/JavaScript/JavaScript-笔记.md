---
title: JavaScript-笔记
author: 老木求知者
createTime: 2024/05/11 15:05:45
permalink: /JavaScript/939ygm7w/
---
# JavaScript 笔记

## JavaScript

### for in 与 for of

## 数据类型

### 原始类型

> 最新的 ECMAScript 定义了 9 中数据类型
> 其中包括 6 中原始类型：Number，String，Boolean，undefined，Symbol，Bight
> 除此之外还有：null，Object，Function

- SymBol 为 ES6 新添加数据类型，可以用作对象键值。
- BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数。

可以使用`typeof`来判断 6 种原始类型:
::: details 点击查看代码
```js
typeof 0; //number
typeof "wenbo"; //string
typeof true; //boolean
typeof undefined; //undefined
typeof Symbol(1); //symbol
typeof 1n; //bight
```
::: 
因为`typeof`判断对象的类型为 Object，不会精确到哪种对象，会不准确。推荐使用`Object.prototype.toString.call()`代替以上进行判断数据类型。

## ECMAScript6 相关

### 解构赋值

> 解构赋值语法是一种 Javascript 表达式。通过解构赋值, 可以将属性/值从对象/数组中取出,赋值给其他变量。

#### 数组解构
::: details 点击查看代码
```js
//数组
var [a, b] = [1, 2, 3];
console.log(a, b); // 1 2

var [c, , b] = [4, 5, 6];
console.log(c, b); // 4 6

var arr = [1, 2, 3];
console.log(...arr); // 1 2 3
console.log([...arr]); // [1,2,3]
```
:::

#### 对象解构
::: details 点击查看代码
```js
var { name, skill } = {
  name: "wenbo",
  age: 18,
  skill: "eat",
};
console.log(name, skill); //wenbo  eat

//无声明复制  需要加小括号
var name, skill;
({ name, skill } = {
  name: "wenbo",
  age: 18,
  skill: "eat",
});
console.log(name, skill); //wenbo  eat
```
::: 

#### `...`展开

> `...`语法，可以适用于迭代器对象
::: details 点击查看代码
```js
let arr = [1, 2, 3];
console.log(...arr); // 1 2 3

let [a, ...b] = [1, 2, 3];
console.log(a, b); // 1   [2,3]

let set = new Set([1, 2, 3]);
console.log(...set); // 1 2 3
```
::: 
### let 与 const

- `var`：定义变量会挂载到`window`上，变量会被提升
- `let`：定义变量不会挂载到`window`上，变量虽然会被提升，但是不允许访问，访问受限
- `const`：与`let`基本一致，但声明后的变量不允许再次赋值
  - `Object.freeze()` 可以冻结一个对象，对象不能再被修改，添加和删除

### 变量提升

- 变量提升只会把声明挪到作用域顶部
- 为了解决函数间相互调用的情况
- 函数提升高于变量提升

### 暂时性死区

- 在使用 `let`和 `const`定义变量时，在声明之前是不可以使用变量的，在语法上称为暂时性死区

### 继承
> 原型链继承  借用构造函数实现继承 组合继承 寄生式组合继承 class 实现继承


::: details 点击查看更多

#### 原型链继承

原型链继承

存在问题：原型中的引用对象会被所有的实例共享，子类在实例化的时候不能给父类构造函数传参
```js
function Father() {
  this.hobby = ["coding", "eat"];
}
Father.prototype.skill = function() {
  console.log("i will javascript");
};
function Son() {}
Son.prototype = new Father();

var father = new Father();
var son = new Son();
var son1 = new Son();
console.log(father.hobby); //[ 'coding', 'eat' ]

father.hobby.push("play");
console.log(father.hobby, son.hobby, son1.hobby);
//[ 'coding', 'eat', 'play' ] [ 'coding', 'eat' ] [ 'coding', 'eat' ]

son.hobby.push("hei");
console.log(father.hobby, son.hobby, son1.hobby);
//[ 'coding', 'eat', 'play' ] [ 'coding', 'eat', 'hei' ] [ 'coding', 'eat', 'hei' ]

son.skill(); //i will javascript
```

#### 借用构造函数继承
借用构造函数继承

存在问题：方法需要定义在构造函数内，因此每次创建子类实例都会创建一边方法
```js
function Father(name) {
  this.name = name;
  this.sayNmae = function() {
    return this.name;
  };
}

function Son(name) {
  Father.call(this, name);
}
Son.prototype = new Father();

var father = new Father("wenbo");
var son = new Son("zhijian");

console.log(father.name, son.name); //wenbo zhijian
console.log(father.sayNmae(), son.sayNmae()); //wenbo zhijian
```

#### 组合继承
组合继承
- 在子类的构造函数中通过`Parent.call(this,)`继承父类的属性
- 然后改变之类的原型为`new Parent()`来继承父类的函数

存在问题：组合继承会导致调用两次父类构造函数,存在内存上的浪费

```javascript
function Father(name) {
  this.name = name;
}
Father.prototype.sayName = function() {
  return this.name;
};

function Son(name, age) {
  Father.call(this, name);
  this.age = age;
}
Son.prototype = new Father();
Son.prototype.constructor = Son;

var son = new Son("yewen", 18);
console.log(son); //Son { name: 'yewen', age: 18 }
console.log(son.sayName()); //yewen
```

#### 寄生组合继承

- `Object.create(proto，[propertiesObject])`：创建一个新对象，使用现有的对象来提供新创建的对象的`__proto__`
  - `proto`：新创建对象的原型对象
  - `propertiesObjec`：可选，需要传入一个对象
寄生组合继承

解决组合继承会导致调用两次父类构造函数
```javascript

function Father(name) {
  this.name = name;
}
Father.prototype.sayName = function() {
  return this.name;
};

function Son(name, age) {
  Father.call(this, name);
  this.age = age;
}

Son.prototype = Object.create(Father.prototype);
Son.prototype.constructor = Son;

var son = new Son("yewen", 18);
console.log(son); //Son { name: 'yewen', age: 18 }
console.log(son.sayName()); //yewen
```

#### Class 继承

```js
class Father {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

class Son extends Father {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  getAge() {
    return this.age;
  }
}
var son = new Son("heihei", 18);
console.log(son); //Son { name: 'heihei', age: 18 }
console.log(son.getName(), son.getAge()); //heihei 18
```
:::

### Promise 
实现一个Promise
:::details 点击查看代码

1111
:::

## JavaScript 内置函数

> 详情见 JavaScript 内置函数部分

## JavaScript 原型链

> 详情见 JavaScript 深入理解部分

## instanceof 和 typeof

### `typeof`：

> 判断一个变量的类型，可以利用`typeof`,来判断`number`，`bight`，`string`，`object`，`boolean`，`function`，`undefined`，`symbol`八种类型

- 注意：

  - `typeof`只能判断`object`数据类型为`object`，不能具体到是哪一种`object`

  - `typeof`不能判断`null`，会把`null`判定为`object`

  -  `console.log(typeof null); //object`



### `instanceof`：
`object instanceof constructor`

> `instanceof` 运算符用来检测 `constructor.prototype`是否存在于参数 `object` 的原型链上。

- 判定一个实例是否属于某种类型

- 判定一个实例是否是其父类型或者祖先类型的实例
::: details 点击查看代码
```javascript
function Person() {}
function Child() {}
Child.prototype = new Person();
var child = new Child();
var person = new Person();
console.log(person instanceof Person); //true
console.log(child instanceof Person); //true
```
::: 
`instanceof` 实现原理：
::: details 点击查看代码
```javascript
function new_instance_of(leftVaule, rightVaule) {
  let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
  leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
  while (true) {
    if (leftVaule === null) {
      return false;
    }
    if (leftVaule === rightProto) {
      return true;
    }
    leftVaule = leftVaule.__proto__;
  }
}
```
:::

`Object.prototype.toString`

> `Object.prototype.toString.call()` 一个不错的判断方法，可以对一个变量的类型来进行比较准确的判断


::: details 点击查看代码
```javascript
Object.prototype.toString.call(1); // "[object Number]"
Object.prototype.toString.call("hi"); // "[object String]"
Object.prototype.toString.call({}); // "[object Object]"
Object.prototype.toString.call([]); // "[object Array]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(() => {}); // "[object Function]"
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(Symbol(1)); // "[object Symbol]"
```
::: 

## call，apply 和 bind

### call

- 调用 call 的对象，必须是个函数 Function。
- call 的第一个参数，是一个对象。 Function 的调用者，将会指向这个对象。如果不传，则默认为全局对象 window。
- 第二个参数开始，可以接收任意个参数。每个参数会映射到相应位置的 Function 的参数上。但是如果将所有的参数作为数组传入，它们会作为一个整体映射到 Function 对应的第一个参数上，之后参数都为空。

### apply
- 它的调用者必须是函数 Function，并且只接收两个参数，第一个参数的规则与 call 一致。
- 第二个参数，必须是数组或者类数组，它们会被转换成类数组，传入 Function 中，并且会被映射到 Function 对应的参数上。这也是 call 和 apply 之间，很重要的一个区别。

### bind

- bind 方法 与 apply 和 call 比较类似，也能改变函数体内的 this 指向。
- 不同的是，bind 方法的返回值是函数，并且需要稍后调用，才会执行。而 apply 和 call 则是立即调用。

