/**
 * name : 计时器
 * effect : 计算开始跟结束之前的时间差
 * describe: 
 * author: xiaxiaxiaodong
 * mail: 441658311@qq.com
 */
 class timeCout{

    constructor( name = '' ){
        this.name = name;
    }
    start(){
        if( this._spendTime > 0 ){
            this._timeStart = Date.now() - this._spendTime;
            this._spendTime = 0
        }else{
            this._timeStart = Date.now();
        }
    }
    pause(){
        this._spendTime = Date.now() - this._timeStart;
    }
    clear(){
        this._spendTime = 0;
    }
    end(){
        if( this._spendTime>0 ){
            this._timeStart = 0;
            this._timeEnd = this._spendTime;
        }else{
            this._timeEnd = Date.now();
        }
        return this.log();
    }
    log(){
        let seconds = Math.floor((this._timeEnd - this._timeStart)*1e3)/1e6;
        console.log(` ${this.name} 共花费${ seconds }秒时间`)
        return seconds;
    }
 }

 module.exports = timeCout;