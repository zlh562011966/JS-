# 说明
1. 本项目所有的例子均来自于学习视频，该视频是：《Javascript设计模式系统讲解与应用》，存放在自己的百度网盘中
2. 在线画图软件：https://processon.com/diagrams， 部分UML图存放在 https://processon.com/diagrams 文件里。
3. 掘金笔记：https://juejin.cn/post/7130546829355122695/。

# demo例子说明：模拟购物车例子
1. 在 `index.html`中，增加代码 ` <div id="app"></div>`
2. 整个购物车的代码在 `demo` 文件夹中
3. 在 `webpack.dev.config.js` 中，增加代理，用于在本地获取购物车数据
    ```js
        proxy: {
            '/api/*': {
                target: 'http://localhost:8880'
            }
        }
    ```
4. 在 `src` 目录下，添加文件 `demo-index.js`，代码如下：
    ```js
    import App from './demo/App.js'

    let app = new App('app')
    app.init()
    ```
5. 在 `src/index.js` 中，引入 `demo-index.js`，代码 `import './demo-index.js';`
6. 运行和启动服务：新开一个终端，运行 `npm run dev`；再新开一个终端，`cd src`、 `cd demo`，`http-server -p 8880`
7. 使用装饰器模式时，`@`会报错，此时需要安装插件 `@babel/plugin-proposal-decorators`，然后在 `.babelrc`中 修改配置：
```js
    "plugins": [
        [
            "@babel/plugin-proposal-decorators",
            {
                "legacy": true
            }
        ]
    ]
```
8. 什么是`http-server`？
`http-server`是一个超轻量级`web`服务器，当我们想要在服务器运行一些代码，但是又不会配置服务器的时候，就可以使用`http-server`就可以搞定了。`http-server`可以将任何一个文件夹当作服务器的目录供自己使用。

使用方法：
- 因为`http-server` 需要用`npm`安装，所以我们在使用前需要安装`node.js`；
- 全局安装 `http-server`：`npm i http-server -g`
- 用终端打开打开需要作为服务器的文件夹，使用`http-server`启动，`http-server -p 端口号`