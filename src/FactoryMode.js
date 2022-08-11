/**
 * 工厂模式
 */
class Product {
    constructor(name) {
        this.name = name;
    }
    init() {
        alert('init1');
    }
    func1() {
        alert('func1');
    }
    func2() {
        alert('func2')
    }
}

class Creator {
    create(name) {
        return new Product(name)
    }
}

const creator = new Creator();
const p = creator.create('p1');
p.init();
p.func1();