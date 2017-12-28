/**
 * 背包
 * 不支持从中删除元素的集合数据类型
 * 对象的私有属性通过symbol实现,用户无法获取到symbol值,从而无法直接get或set属性
 */
const pocket = Symbol('_pocket');
const length = Symbol('_length');
class Bag {
    
    constructor() {
        this[pocket] = {};
        this[length] = 0;
    }
    add(obj) {
        this[pocket][this[length]++] = obj;
    }
    size() {
        return this[length]
    }
    isEmpty() {
        return this[length] == 0;
    }
}

module.exports = Bag;


