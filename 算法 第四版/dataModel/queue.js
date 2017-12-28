/**
 * name : Queue
 * effect : 先进先出队列
 * describe: 
 * author: xiaxiaxiaodong
 * mail: 441658311@qq.com
 */
class Queue {
    constructor(){
        this._index = 0;
        this._length = 0;
        this.data = {};
    }
    enqueue(item){
        this.data[this._length++] = item;
    }
    dequeue(){
        if( this.isEmpty() ){
            return
        }
        delete this.data[this._index++];
    }
    isEmpty(){
        return this._length == 0
    }
    size(){
        return this._length - this._index;
    }
}

/*
var b = new Queue();

b.enqueue(1)
console.log(b.size());
b.dequeue()
console.log(b.size());
console.dir(b);
*/

module.exports = Queue;