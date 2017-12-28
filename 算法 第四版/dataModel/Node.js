/**
 * name : node
 * effect : 
 * describe: 链表的节点对象
 * author: xiaxiaxiaodong
 * mail: 441658311@qq.com
 */
class Node {
    constructor(item = null, next = null) {
        this.item = item;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.node = null;
        this.length = 0;
    }
    [Symbol.iterator](){
        let that = this;
        return {
            node:that.node,
            next:function(){ 
                if( this.node !== null ){
                    let item = this.node.item; 
                    this.node = this.node.next;
                    return {
                        value:item
                    }
                }else{
                    return {
                        done:true
                    }
                }
            }
        }
    }
    push(item) {
        this.node = new Node(item, this.node);
        this.length++;
    }
    pop() {
        if (!this.isEmpty()) {
            let item = this.node.item;
            this.node = this.node.next;
            this.length--;
            return item;
        }
    }
    isEmpty() {
        return this.node === null }
    size() {
        return this.length }
}

/*

var l = new LinkedList();

let arrayLike = { length: 2, 0: 'a', 1: 'b' };
 

// 正确
for (let x of Array.from(arrayLike)) {
    l.push(x);
}
for(let x of l){
  console.log(x)
}


*/

module.exports = LinkedList;
