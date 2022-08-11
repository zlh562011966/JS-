/**
 * 装饰器模式
 * 1. 装饰类
 * 2. 装饰方法
 */
// 1. 简单的装饰类的demo
function testDec(target) {
    target.isDesc = true;
}

@testDec
class Demo {
    // ... 省略代码
}
alert(Demo.isDesc); // true

// 2. 装饰器的原理
@decorator
class A { }

// 等同于
class A { }
A = decorator(A) || A;

// 3. 装饰类加参数
function testDec(isDesc) {
    return function (target) {
        target.isDesc = isDesc;
    }
}

@testDec(false)
class Demo {
    //......
}
alert(Demo.isDesc) // false