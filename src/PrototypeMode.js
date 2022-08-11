/**
 * 原型模式
 */
// Object.create() 用到了原型模式的思想，虽然不是java中的clone
// 基于一个原型创建一个对象
const prototype = {
    getName: function () {
        return this.first + '' + this.last;
    },
    say: function () {
        console.log('hello');
    }
}

// 基于原型创建 x
let x = Object.create(prototype);
x.first = 'A';
x.last = 'B';
console.log(x.getName());
x.say();


// 基于原型创建y
let y = Object.create(prototype);
y.first = 'Y';
y.last = 'Z';
console.log(y.getName());
y.say();