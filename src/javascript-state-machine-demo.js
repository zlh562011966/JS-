/**
 * 状态模式
 * javascript-state-machine 插件
 * https://github.com/jakesgordon/javascript-state-machine/blob/master/README.md
 */
import StateMachine from "javascript-state-machine";
import $ from 'jquery';

let $btn = $('#btn')
// 状态机模型
let fsm = new StateMachine({
    init: '收藏',  // 初始状态，待收藏
    transitions: [
        {
            name: 'doStore',
            from: '收藏',
            to: '取消收藏'
        },
        {
            name: 'deleteStore',
            from: '取消收藏',
            to: '收藏'
        }
    ],
    methods: {
        // 执行收藏
        onDoStore: function () {
            alert('收藏成功')
            updateText()
        },
        // 取消收藏
        onDeleteStore: function () {
            alert('已取消收藏')
            updateText()
        }
    }
})

// 更新文案
function updateText() {
    $btn.text(fsm.state)
}

// 初始化文案
updateText()

// 点击事件
$btn.click(function () {
    if (fsm.is('收藏')) {
        fsm.doStore(1)
    } else {
        fsm.deleteStore()
    }
})

