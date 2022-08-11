/**
 * 观察者模式
 */
// 主题，保存状态，状态变化之后触发所有观察者对象
class Subject {
    constructor() {
        this.state = 0;
        this.observers = [];
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.notifyAllObservers();
    }
    notifyAllObservers() {
        this.observers.forEach(observer => {
            observer.update();
        })
    }
    attach(observer) {
        this.observers.push(observer);
    }
}

class Observer {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
        this.subject.attach(this); // 将自己添加为观察者
    }
    update() {
        console.log(`${this.name} update, state:${this.subject.getState()}`);
    }
}

const s = new Subject();
const o1 = new Observer('o1', s);
const o2 = new Observer('o2', s);
s.setState(1);
s.setState(2);