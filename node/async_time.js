/*
    你会发现，例子 2 先输出，例子 1 后输出，可以验证是异步的，
    因为例子 1 需要进行 IO 耗时较长，但是例子 2 是直接输出信息，耗时较短，
    在两者几乎同时执行的情况下，例子 2 优先执行完。
*/

//例子1
var fs = require("fs");
fs.readFile('./node/source/text.txt',
function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
    console.log("end");
    console.log("***********************");
});
//例子2
var events = require("events");
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected() {
    console.log("connnect successfully !");
    eventEmitter.emit("after_connect");
}
eventEmitter.on("connected", connectHandler);
eventEmitter.on('after_connect',
function() {
    console.log("after connect");
});
eventEmitter.emit("connected");
console.log("event emitter end");