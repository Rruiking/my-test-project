function EventEmitter() {
    this.events = {};//所有事件监听函数放在这个对象保存
    this._maxListeners = 10; //监听函数最多10个
}

EventEmitter.prototype.on = EventEmitter.prototype.addEventListener = function (type,listener) {
    if(this.events[type]){
        this.events[type].push(listener);
        if(this._maxListeners!=0&&this.events[type].length>this._maxListeners){
            console.error('MaxListenersExceededWarning: Possible EventEmitter memory leak detected.\n')
        }
    }else{
        this.events[type] = [listener];
    }
}

EventEmitter.prototype.emit = function (type,...rest) {
    if(this.events[type]){
        //遍历触发函数数组   apply把this指向当前对象  解析rest
        this.events[type].forEach((listener) => {
            listener.apply(this,rest)
        });
    }
}

EventEmitter.prototype.removeListener = function (type,listener) {
    if(this.events[type]){
        this.events[type] = this.events[type].filter(l=>l!=listener);
    }
}

var myEmitter = new EventEmitter();
console.log(myEmitter)
console.log(EventEmitter.prototype)
myEmitter.on('eventName',callback)
function callback() {
    console.log('test')
}
myEmitter.emit('eventName')

var myEmitter2 = new EventEmitter();
myEmitter2.on('startEmit',()=>{console.log('test2')})
myEmitter2.emit('startEmit')