/**
 * 代理模式
 */
// class RealImg {
//     constructor(fileName) {
//         this.fileName = fileName;
//         this.loadFromDisk();
//     }
//     loadFromDisk() {
//         console.log('loading...' + this.fileName);
//     }
//     display() {
//         console.log('display...' + this.fileName);
//     }
// }

// class ProxyImg {
//     constructor(fileName) {
//         this.realImg = new RealImg(fileName);
//     }
//     display() {
//         this.realImg.display();
//     }
// }

// let proxyImg = new ProxyImg('1.png');
// proxyImg.display();

/**
 * 明星经纪人例子-代理模式
 */
// 明星
let star = {
    name: '张三',
    age: 20,
    phone: '明星:18866668888'
};

// 经纪人
let agent = new Proxy(star, {
    get: function (target, key) {
        if (key === 'phone') {
            return '经纪人电话:1111111111';
        }
        if (key === 'price') {
            return 10000; // 经纪人报价
        }
        return target[key];
    },
    set: function (target, key, val) {
        if (key === 'customPrice') {
            if (val < 8000) {
                throw new Error('价格太低');
            } else {
                target[key] = val;
                return true;
            }
        }
    }
});
console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);

// agent.customPrice = 7000;
// console.log(agent.customPrice);
agent.customPrice = 9000;
console.log(agent.customPrice);