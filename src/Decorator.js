/**
 * 装饰器模式
 */
class Circle {
    draw() {
        console.log('画一个圆形');
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle;
    }
    draw() {
        this.circle.draw();
        this.setRedBorder(circle);
    }
    setRedBorder() {
        console.log("设置红色边框")
    }
}

let circle = new Circle();
circle.draw(); // 画一个圆形

let decorator = new Decorator(circle);
decorator.draw(); // 画一个圆形    设置红色边框
