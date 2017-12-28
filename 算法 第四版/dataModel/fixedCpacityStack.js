/**
 * name : fixedCpacityStack
 * effect : 
 * describe: 定容栈
 * author: xiaxiaxiaodong
 * mail: 441658311@qq.com
 */
class fixedCpacityStack {
    constructor(length = 10) {
        this.maxlength = length;
        this.length = 0;
        this.data = {}
    }
    [Symbol.iterator](){
        const that = this;
        console.log(`创造循环`)
        return {
            index:0,
            next:function(){
                console.log(`执行 下一步 next ${this.index} < ${that.length}`)
                if( this.index < that.length ){
                    return {
                        value:that.data[this.index++]
                    }
                }else{
                    return { 
                        done:true
                    }
                }
            },
            return(){
                console.log(`---------------执行完毕`)
                return { 
                    done:true
                }
            }
        }
    }
    push(item) {
        if( this.length >= this.maxlength  ){
            this.length = this.maxlength ;
            return
        }
        this.data[this.length++] = item;
    }
    pop() {
        return this.isEmpty()?undefined:this.data[--this.length];
    }
    isEmpty() {
        return this.length <= 0;
    }
    size() {
        return this.length;
    }
}


/*

var fixeds = new FixedCpacityStack(2);

log(`fixeds.length:${fixeds.length}`);
log(`fixeds.maxlength:${fixeds.maxlength}`);
fixeds.push(1);
fixeds.push(2);
fixeds.push(3);
log(`fixeds.length:${fixeds.length}`);
log(`fixeds.pop: ${fixeds.pop()}`)
log(`fixeds.length:${fixeds.length}`);

log(`----------情况一-------------`)
// 
for (let line of fixeds) {
  console.log(line);
  break;
}
log(`---------情况二--------------`)
// 
for (let line of fixeds) {
  console.log(line);
  continue;
}
log(`---------情况三--------------`)
// 
for (let line of fixeds) {
  console.log(line);
  throw new Error();
}
log(`-----------------------`)
*/

module.exports = fixedCpacityStack;
