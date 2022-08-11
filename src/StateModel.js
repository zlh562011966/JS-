/**
 * 状态模式
 */
// 状态，比如红灯、绿灯、黄灯
class State {
    constructor(color) {
        this.color = color;
    }
    handle(context) {
        console.log(`turn to ${this.color} light`);
        context.setState(this);
    }
}

// 主体，可以获取状态和设置状态
class Context {
    constructor() {
        this.state = null;
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
    }
}

// 测试代码
let context = new Context();

let green = new State('green');
green.handle(context); // turn to green light
console.log(context.getState()); // State {color: 'green'}

let red = new State('red');
red.handle(context); // turn to red light
console.log(context.getState()); // State {color: 'red'}

let yellow = new State('yellow');
yellow.handle(context); // turn to yellow light
console.log(context.getState()); // State {color: 'yellow'}