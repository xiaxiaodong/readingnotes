/**
 * name : 优先队列
 * effect : 保证父节点永远大于两个子节点
 * describe: 
        持续的delMax返回的数据 是一个从大到小的数据组合
 * author: xiaxiaxiaodong
 * mail: 441658311@qq.com
 */

class maxPQ{
    
    constructor( ){
        this.list = [undefined];
        this.length = 0;
    }
    insert( item ){
        this.list.push(item);
        this.swim(++this.length);
    }
    max(){
        return this.list[1]
    }
    delMax(){
        if( this.isEmpty() ){ 
            console.dir(this.list);
            return ;
        }
        this.exch(1,this.length)
        let key = this.list.pop()
        this.sink(1);
        this.length--;
        console.dir(this.list);
        return key;
    }
    swim( index ){
        while( index > 1 && this.less(index/2,index) ){
            this.exch(index/2,index);
            index = Math.floor(index/2)
        } 
    }
    sink( index ){ 
        while( 2*index < this.length ){
            let j = 2*index;
            if( j< this.length&& this.less(j,j+1) ){
                j++
            }
            if(this.less(j,index)) break;
            this.exch(index,j)
            index = j;
        }
    }
    less(a,b){
        a = Math.floor(a);
        b = Math.floor(b);
        return this.list[a] < this.list[b];
    }
    exch( a , b ){
        a = Math.floor(a);
        b = Math.floor(b);
        let value = this.list[a];
        this.list[a] = this.list[b];
        this.list[b] = value;
    }
    size(){
        return this.length;
    }
    isEmpty(){
        return this.size() == 0?true:false;
    }
}

module.exports = maxPQ