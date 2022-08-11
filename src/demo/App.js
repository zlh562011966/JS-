/**
 * 使用 jQuery 做一个模拟购物车的示例，包括显示购物车列表、加入购物车、从购物车删除
 */
import $ from 'jquery'
import ShoppingCart from './ShoppingCart/ShoppingCart.js'
import List from './List/List.js'

export default class App {
    constructor(id) {
        this.$el = $(`#${id}`)
    }

    // 初始化购物车
    initShoppingCart() {
        let shoppingCart = new ShoppingCart(this)
        shoppingCart.init()
    }

    // 初始化商品列表
    initList() {
        let list = new List(this)
        list.init()
    }

    init() {
        this.initShoppingCart()
        this.initList()
    }
}