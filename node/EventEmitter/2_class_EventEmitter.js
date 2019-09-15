/*
    此示例代码为学习EventEmitter代码所记
    2. 第二部分为使用class方式来实例化调用
*/

// 2. ...

const EventEmitter = require('events');
// 定义一个MyEmitter类继承EventEmitter
// extend后面的{}，是说明只单纯继承，MyEventEmitter没有其他的构造函数和原型方法
class MyEventEmitter extends EventEmitter{}

const myEmitter = new MyEventEmitter();
myEmitter.on('event',(arg1,arg2)=>{
    console.log('event 触发成功！')
    console.log(`参数1${arg1},参数2${arg2}`)
})
myEmitter.emit('event','test1','test2');
