const util = require('./util.js')

/**
 * name : 选择排序
 * effect : 选择数组中最小的一个放在第一位,如此往复
 * describe: 
 *      运行时间跟输入无关
 *      数据移动是最少的
 * author: xiaxiaxiaodong
 * mail: 441658311@qq.com
 */
function select(list) {
    
    for (let i = 0,length = list.length; i < length; i++) {
        let min = list[i],index;
        for( let j = i+1;j<length;j++ ){
            if( min > list[j] ){
                min = list[j];
                index = j;
            }
        }
        // 判断最小值与当前值的大小
        if ( min < list[i]) {
            let key = list[index];
            list[index] = list[i];
            list[i] = key;
        }
    } 
    /*
    书中的案例
    let length = list.length
    for (var i = 0; i < length; i++) {
        let min = i,minValue = list[i]
        for( let j=i+1;j<length;j++ ){
            if( list[j] < minValue ){
                min = j;
                minValue = list[min];
            }
        }
        let value = list[i];
        list[i] = list[min];
        list[min] = value;
    }
    */
}

module.exports = select;