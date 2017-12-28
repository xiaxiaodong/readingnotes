/**
 * name : 基于顺序查找的无序链表
 * effect : 
 * describe: 
 * author: xiaxiaxiaodong
 * mail: 441658311@qq.com
 */

class Node{
    constructor( key,value,next ){
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

 class sequentialSearchST{
    construcor(){
        this.first = null; 
    }
    put(key,value){
        for(let x = this.first;x!=null;x = x.next){
            if( key == x.key ){
                x.value = value;
                return
            }
        }
        this.first = new Node(key,value,this.first)
    }
    get(key){
        for(let x = this.first;x!=null;x = x.next){
            if( key == x.key ){
                return x.value;
                
            }
        }
    }
 }

 module.exports = sequentialSearchST;