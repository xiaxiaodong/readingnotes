/**
 * name : Stack
 * effect : 
 * describe: 后进先出 栈 
 * author: xiaxiaxiaodong
 * mail: 441658311@qq.com
 */
class Stack {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    push(item) {
        this.data[this.length++] = item;
    }
    pop() {
        return this.isEmpty()?undefined: this.data[--this.length];
    }
    isEmpty() {
        return this.length==0;
    }
    size() {
        return this.length;
    }
}

/*


var s = new Stack();

log(`s.length:${s.length}`);
s.push(1);
s.push(2);
log(`s.pop: ${s.pop()}`)
log(`s.length:${s.length}`);
*/

module.exports = Stack;
