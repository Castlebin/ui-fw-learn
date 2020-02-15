# JavaScript 教程

https://www.runoob.com/js/js-tutorial.html

## 注意事项

- JavaScript 是脚本语言。浏览器会在读取代码时，逐行地执行脚本代码
- JavaScript 中，如果变量没有用 var 声明，那么它就是一个全局变量（即使在函数中第一次使用）。在函数外的变量，本身就是全局变量
- HTML 中，全局变量是 window 对象，所有的数据变量都属于 window 对象。你的全局变量，或者函数，可以覆盖 window 对象的变量或者函数。
  局部变量，包括 window 对象可以覆盖全局变量和函数
- JavaScript 函数有个 arguments 对象，包含了函数调用的参数数组
- JavaScript 跟 Java 一样，函数调用都是值传递
- JavaScript 是面向对象的语言，但 JavaScript 不使用类。
  在 JavaScript 中，不会创建类，也不会通过类来创建对象（就像在其他面向对象的语言中那样）。
  JavaScript 基于 prototype，而不是基于类的。
- 所有 JavaScript 数字均为 64 位，都是浮点类型，可能会不准确（IEEE754 标准）
  JavaScript 不是类型语言。与许多其他编程语言不同，JavaScript 不定义不同类型的数字，比如整数、短、长、浮点等等。在 JavaScript 中，数字不分为整数类型和浮点型类型，所有的数字都是 浮点型类型

JavaScript 数据类型

- 值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。
- 引用数据类型：对象(Object)、数组(Array)、函数(Function)。
- null 和 undefined 的值相等，但类型不等：
  typeof undefined // undefined
  typeof null // object
  null === undefined // false
  null == undefined // true
