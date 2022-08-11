/**
 * 命令模式
 */
class Receiver {
    exec() {
        console.log('执行');
    }
}

class Command {
    constructor(receiver) {
        this.receiver = receiver;
    }
    cmd() {
        console.log('触发命令');
        this.receiver.exec();
    }
}

class Invoker {
    constructor(command) {
        this.command = command;
    }
    invoke() {
        console.log('开始');
        this.command.cmd();
    }
}

// 测试代码
// 士兵
let soldier = new Receiver();
// 小号手
let trumpeter = new Command(soldier);
// 将军
let general = new Invoker(trumpeter);
general.invoke(); // 开始  触发命令  执行