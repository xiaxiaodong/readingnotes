/**
 * name : 基于二分查找的有序数组
 * effect : 
 * describe: 
 * author: xiaxiaxiaodong
 * mail: 441658311@qq.com
 */

class BinarySearchST {
    constructor() {
        this.keys = [];
        this.values = [];
        this.length = 0;
    }
    /*
    // 顺序查找 从后往前
    rank(key) {
        let keys = this.keys;
        for (let i = keys.length ; i > 0; i--) {
            if (key > keys[i-1]) {
                return i;
            }
        }
        return 0
    }
    */
    
    // 二分法查找位置
    rank(key) {
        let keys = this.keys;
        let start = 0,
            end = keys.length - 1,
            medium;
        while(start <= end) {
            medium = start + Math.round((end - start) / 2)
            if (key > keys[medium]) {
                start = medium + 1;
            } else if (key < keys[medium]) {
                end = medium - 1
            } else {
                return medium
            }
        }
        return start
    }
    
    put(key, value) {
        let keys = this.keys,
            values = this.values,
            length = this.length,
            i = this.rank(key);
        if ( i < length && keys[i] == key) {
            // key值已存在 则更新
            values[i] = value;
            return
        }
        
        for (let j = this.length++; j > i; j--) {
            keys[j] = keys[j-1];
            values[j] = values[j-1];
        }
        keys[i] = key;
        values[i] = value;
    }
    get(key) {
        let i = this.rank(key);
        if ( i < this.length && this.keys[i] == key) {
            return this.values[i]
        }
    }
    min(){
        this.keys[0]
    }
    max(){
        this.keys[this.length-1]
    }
    select(key){
        return this.keys[key]
    }
    ceiling(key){
        let i = this.rank(key);
        return this.keys[i]
    }
    floor(key){
        let i = this.rank(key);
        if( i < this.length - 2 && this.keys[i] != key ){
            return this.keys[i+1]
        }else{
            return this.keys[i]
        }
    }
    delete(key){
        let i = this.rank(key);
        if ( i < this.length && this.keys[i] == key) {
            // key值存在
            for( let j = i;i < this.length - 1;i++){
                this.keys[i] = this.keys[i+1]
                this.values[i] = this.values[i+1]
            }
            this.keys.pop()
            this.values.pop()
        }
    }
    size() {
        return this.length
    }
    isEmpty() {
        return (this.size() < 1) ? true : false;
    }
}

module.exports = BinarySearchST;