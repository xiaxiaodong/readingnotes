/**
 * name : 链表
 * effect : 
 * describe: 
 * author: xiaxiaxiaodong
 * mail: 441658311@qq.com
 */
class Node {
    constructor( current ,next = null){
        this.next = next;
        this.current = current
    }
}
class linklist {

    constructor() {
        this.item = null;
        this.nextNode = null;
    }

    append(item) {
        this.nextNode = new Node(item,this.nextNode);
        this.item = item;
    }
    pop(){
        if( !this.isEmpty() ){
            let item = this.item;
            this.item = this.nextNode.current;
            this.nextNode = this.nextNode.next;
            return this.item;
        }
    }
    peek(){
        return this.nextNode;
    }
    isEmpty(){
        return this.next === null;
    }

}
/*
let arrayLike = { length: 2, 0: 'a', 1: 'b' };

var l = new linklist();

// 正确
for (let x of Array.from(arrayLike)) {
  console.dir(l)
    l.append(x); 
}

console.dir(l)
l.pop();
console.dir(l)
*/

module.exports = linklist;
