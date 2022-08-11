/**
 * 单例模式
 */
class SingleObject {
    login() {
        console.log('login......')
    }
}

// 定义静态方法 getIntance
SingleObject.getIntance = (function () {
    let instance;
    // 闭包
    return function () {
        if (!instance) {
            instance = new SingleObject();
        }
        return instance;
    }
})()

// 测试：注意这里只能使用静态函数 getInstance，不能使用 new SingleObject()
let obj1 = SingleObject.getIntance();
obj1.login();
let obj2 = SingleObject.getIntance();
obj2.login();
console.log("obj1 === obj2", obj1 === obj2) // true, 两者必须完全相等，否则就不是单例模式了

let obj3 = new SingleObject(); // 使用new 方式，就不是单例模式了
console.log("obj1 === obj3", obj1 === obj3); // false
