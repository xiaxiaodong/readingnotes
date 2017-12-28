/**
 * name : 插入排序
 * effect : 像一张一张接扑克牌一样,拿后一张跟前一张比较
 *          如果后一张小于前一张,就交换,继续跟前一张交换,如果大于,就继续循环下一张牌的比较
 * describe: 
 *          插入排序所需的时间取决于输入中元素的初始位置
 * author: xiaxiaxiaodong
 * mail: 441658311@qq.com
 */
function insert(list ) {
    for (let i = 1, length = list.length; i < length; i++) {
        for (let j = i; j > 0 && (list[j] < list[j - 1]); j--) {
            let key = list[j];
            list[j] = list[j - 1];
            list[j - 1] = key;
        }
    }
}

module.exports = insert;
