/**
 * 装饰器模式
 * 装饰方法
 */
function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}
class Person {
    constructor() {
        this.first = 'A';
        this.last = 'B';
    }

    @readonly
    name() {
        return `${this.first} ${this.last}`;
    }
}

let p = new Person();
console.log(p.name());
p.name = '11111111';// 报错，name只读，不能修改