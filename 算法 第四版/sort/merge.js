/**
 * name : 归并排序
 * effect : 将大数组切换成一个个小数组排序并合并
 * describe: 
 * author: xiaxiaxiaodong
 * mail: 441658311@qq.com
 */
function sort(list = [], start = 0, end = list.length - 1) {
    let median = start + Math.round((end - start) / 2);
    insertSort(list, start, median-1);
    insertSort(list, median, end);
    merge(list, start, median, end);
}

// [start,end] 排序的数组包括 start , 包括 end
function insertSort(list, start, end) {
    for (let i = start + 1; i <= end; i++) {
        for (let j = i; j > start; j--) {
            if (list[j] < list[j - 1]) {
                let value = list[j];
                list[j] = list[j - 1];
                list[j - 1] = value;
            }
        }
    }
}

function merge(list, start, median, end) {
    let z = j = 0,
        k = median - start,
        aux = [],
        max_j = k - 1,
        max_k;
    for (let i = start; i <= end; i++) {
        aux[z++] = list[i];
    }
    max_k = z - 1;

    // console.dir(z)
    // console.dir(aux)
    // console.dir(arguments)
    
    for (let i = start; i <= end; i++) {
        // console.log(` ${j} ${k} `)
        if (j > max_j) {
            list[i] = aux[k++]
        } else if (k > max_k) {
            list[i] = aux[j++]
        } else if (aux[j] < aux[k]) {
            list[i] = aux[j++];
        } else {
            list[i] = aux[k++];
        }
    }
    // console.dir(list)
}

module.exports = sort;