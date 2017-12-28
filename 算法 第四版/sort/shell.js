/**
 * name : 希尔排序
 * effect : 将一个数组分为若干个有序数组,再进行排序
 * describe: 
 *      插入排序的特点:
            插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到线性排序的效率。
            但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位。
        根据插入排序的特点,希尔排序就是插入排序的一种优化
 * author: xiaxiaxiaodong
 * mail: 441658311@qq.com
 */
function shell(list) {
    const length = list.length;
    let span = 1;
    while (span < length / 3) {
        span = span * 3 + 1;
    }
 
    while (span >= 1) {
        // 往前往后 循环
        for (let i = 0; i < length-span; i++) {
            for (let j = i; j < length - span; j += span) {
                if (list[j] > list[j + span]) {
                    let value = list[j];
                    list[j] = list[j + span];
                    list[j + span] = value;
                }
            }
           
        }
/*
        // 从后往前
        for (let i = span; i < length; i++) {
            for (let j = i; j >= span; j -= span) {
                if (list[j] < list[j - span]) {
                    let value = list[j];
                    list[j] = list[j - span];
                    list[j - span] = value;
                }
            }
           
        }
*/
        span = (span-1)/3;
    }
}

module.exports = shell;