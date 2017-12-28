/**
 * name : 共有组件 
 * effect : 存储一些跟数字有关的公共函数
 * describe: 
 * author: xiaxiaxiaodong
 * mail: 441658311@qq.com
 */

const timeCount = require('./timeCount.js');

/** 
 * describe:  在数组的指定位置开始到指定的结束位置(不包括)的范围内,找到最小值
 *            并返回位置,和值
 */
 function getListMin( list,start = 0,end = list.length){
    let min = list[start],index = start;

    for( let i = start;i<end;i++ ){
        if( min > list[i] ){
            min = list[i];
            index = i;
        }
    }
    return {
        index:index,
        value:min
    }
};

/**
 * effect : 获取一个length长度的随机数组
 */
function getRandomList(length = 5) {
    let list = [];
    for (let i = 0; i < length; i++) {
        let number = Math.ceil(Math.random()*10000);
        list.push(number);
    }
    return list;
};

/**  
 * describe:  交换数组中的任意两个位置的数据
 */
function exchange( list =[],a = 0,b = list.length-1 ){
    /*
    利用 解构赋值 来交换变量的值 效率特别低
    [list[a],list[b]] = [list[b],list[a]];
    */
    let value = list[a];
    list[a] = list[b];
    list[b] = value;
};

/**  
 * describe:  判断数组是否排序正确
 */
function isSorted( list = []){
    let isSorted = true;
    for (var i = 0; i < list.length-1; i++) {
        // console.log(` ${list[i]} 和 ${list[i+1]} 比较 ${list[i] > list[i+1]} `)
        if( list[i] > list[i+1] ){
            isSorted = false;
        }
    }
    if( !isSorted ){
        console.dir(list);
        console.log(` 排序-->${ isSorted?'正常':'错误' }`)
    }
    return isSorted;
};

/**  
 * effect:  排序自动化测试
 * describe: 对单一排序检测其正确与否
 */
function test( sortFun ,times = 50,length = 500){
    console.log('--------------测试开始--------------');
    for (var i = 0; i < times; i++) {
        let list = getRandomList(length);
        sortFun( list );
        if ( !isSorted(list) ) {
            console.log(`-------error start----------`)
            console.dir(list)
            console.log(`-------error end----------`)
        }
    }
    console.log('--------------测试完成--------------');
};

/**  
 * effect:  比较两个排序算法
 * describe: 对两个算法使用同一个数组进行排序
 */
function comparison( sortA,sortB ,times = 50,length = 100){

    console.log('--------------测试开始--------------');
    let tcA = new timeCount(sortA.name);
    let tcB = new timeCount(sortB.name);

    for (var i = 0; i < times; i++) {
        let listA = getRandomList(length);
        let listB = [...listA];
        tcA.start()
        sortA(listA)
        tcA.pause()

        tcB.start()
        sortB(listB)
        tcB.pause()

        if ( !isSorted(listA) ) {
            console.log(`-------error A start----------`)
            console.dir(listA)
            console.log(`-------error A end----------`)
        }
        if ( !isSorted(listB) ) {
            console.log(`-------error B start----------`)
            console.dir(listB)
            console.log(`-------error B end----------`)
        }
    }
    let sA = tcA.end();
    let sB = tcB.end();
    console.log(`sA / sB = ${sA/sB} `);
    console.log('--------------测试完成--------------');
};

module.exports = {
    getRandomList,
    getListMin,
    exchange,
    isSorted,
    test,
    comparison,
};