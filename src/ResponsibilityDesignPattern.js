/**
 * 职责链模式
 */
class Action {
    constructor(name) {
        this.name = name;
        this.nextAction = null;
    }
    setNextAction(action) {
        this.nextAction = action;
    }
    handle() {
        console.log(`${this.name}审批`);
        if (this.nextAction != null) {
            this.nextAction.handle();
        }
    }
}

let a1 = new Action('组长');
let a2 = new Action('经理');
let a3 = new Action('人力');
a1.setNextAction(a2);
a2.setNextAction(a3);
a1.handle(); // 组长审批   经理审批  人力审批