/**
 * name : 快速排序
 * effect : 
 * describe: 
        将一个数组随机取第一个值,作为参照物,
        将一个数组分成一个大与它的数组跟一个小于它的数组

 * author: xiaxiaxiaodong
 * mail: 441658311@qq.com
 */
function quick(list, start = 0, end = (list.length == 0) ? 0 : (list.length - 1)) {
    let length = list.length;
    let v = start,
        v_value = list[v],
        j = start,
        k = end + 1;
    while (true) {

        while (list[++j] <= v_value) {
            if (j >= end) {
                break
            }
        }
        while (list[--k] > v_value) {
            if (k <= start + 1) {
                break
            }
        }
        
        // 循环打断条件
        if (j >= k) {
            break
        }
        let value = list[j]
        list[j] = list[k];
        list[k] = value;
    }
    if (j != start) {
        list[v] = list[k];
        list[k] = v_value;
    }
    // 前排 插入排序
    for (let i = start + 1; i <= k; i++) {
        for (let j = i; j > start; j--) {
            if (list[j] < list[j - 1]) {
                let value = list[j];
                list[j] = list[j - 1];
                list[j - 1] = value;
            }
        }
    }

    // 后排  插入排序
    for (let i = k + 1; i <= end; i++) {
        for (let j = i; j > k; j--) {
            if (list[j] < list[j - 1]) {
                let value = list[j];
                list[j] = list[j - 1];
                list[j - 1] = value;
            }
        }
    }

    return k
}

module.exports = quick;