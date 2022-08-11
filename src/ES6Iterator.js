/**
 * ES6的Iterator示例
 */
function each(data) {
    // 生成遍历器
    let iterator = data[Symbol.iterator]();

    // console.log(iterator.next()); // 有数据时返回 { value: 1, done: false }
    // console.log(iterator.next());
    // console.log(iterator.next());
    // console.log(iterator.next());
    // console.log(iterator.next()); // 没有数据时返回 { value: undefined, done: true }

    let item = { done: false };
    while (!item.done) {
        item = iterator.next();
        if (!item.done) {
            console.log(item.value)
        }
    }
}

// 测试代码
let arr = [1, 2, 3, 4];
each(arr); // 1 2 3 4

let m = new Map();
m.set('a', 100);
m.set('b', 200);
// each(m);
// 结果如下：
// {value: Array(2), done: false}
// {value: Array(2), done: false}
// {value: undefined, done: true}
// {value: undefined, done: true}
// {value: undefined, done: true}


// let nodeList = document.getElementsByTagName('p');
// each(nodeList);


/**
 * 但是，`Symbol.iterator`并不是人人都知道，也不是每个人都需要封装一个 `each` 方法，因此有了 `for...of`语法。
 */
function each1(data) {
    // 带有遍历器特性的对象：data[Symbol.iterator] 有值
    for (let item of data) {
        console.log(item);
    }
}
// 测试代码
let arr1 = [1, 2, 3, 4];
each1(arr); 