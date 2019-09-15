/*
    此示例代码为学习EventEmitter代码所记
    1. 第一部分为普通EventEmitter实例化过程和调用
*/

// 1. ...

// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
    console.log('连接成功。');
    // 触发 data_received 事件 
    eventEmitter.emit('data_received');
    console.log('触发')
 }
  
 // 绑定 connection 事件处理程序
 eventEmitter.on('connection', connectHandler);
 // 使用匿名函数绑定 data_received 事件
 eventEmitter.on('data_received', function(){
    console.log('数据接收成功。');
 });
  
 // 触发 connection 事件 
 eventEmitter.emit('connection');
  
 console.log("程序执行完毕。");