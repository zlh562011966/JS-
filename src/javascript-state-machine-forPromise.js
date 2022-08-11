/**
 * 状态模式
 * 使用javascript-state-machine 插件模拟Promise状态机变化
 */
import StateMachine from "javascript-state-machine";

// 状态机模型
let fsm = new StateMachine({
    init: 'pending',
    transition: [
        {
            name: 'resolve',
            from: 'pending',
            to: 'fullfilled',
        },
        {
            name: 'reject',
            from: 'pending',
            to: 'rejected',
        }
    ],
    methods: {
        // 监听 resolve
        onResolve: function (state, data) {
            // state - 当前状态机实例；data - fsm.resolve(xxx) 传递的参数
            data.succesList.forEach(fn => fn());
        },
        // 监听 reject
        onReject: function (state, data) {
            // state - 当前状态机实例；data - fsm.reject(xxx) 传递的参数
            data.failList.forEach(fn => fn());
        }
    }
})

// 定义 Promise
class MyPromise {
    constructor(fn) {
        this.successList = [];
        this.failList = [];

        fn(function () {
            // resolve 函数
            fsm.resolve(this);
        }, function () {
            // reject 函数
            fsm.reject(this);
        })
    }

    then(succesFn, failFn) {
        this.succesList.push(succesFn);
        this.failList.push(failFn);
    }
}

// 测试代码
function loadImg(src) {
    const promise = new Promise(function (resolve, reject) {
        let img = document.createElement('img');
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject(img)
        }
        img.src = src;
    })
    return promise;
}
let src = "https://img.alicdn.com/imgextra/i1/6000000007842/O1CN01awUHxQ27ngiY2gNm5_!!6000000007842-0-octopus.jpg";
let result = loadImg(src);
result.then(function () {
    console.log("ok1")
}, function () {
    console.log("fail1")
})

result.then(function () {
    console.log("ok2")
}, function () {
    console.log("fail2")
})