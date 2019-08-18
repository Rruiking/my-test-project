/*
    该实例代码展示promise用法
    注释代码也有参考价值

    总结：
        promise对象
    1. 需要初始化promist对象，或者function的返回值为promise对象
    2. promise对象本身执行函数就是callback回调函数，该回调函数里面需要再次传入resole和reject回调函数
       resole回调函数执行成功后的返回值，在then的回调函数function(result)中可以捕获到
       .then(function(result){console.log(result)})
       reject回调函数为执行失败后的回调函数，该回调函数是写在catch中，同理也可以在catch的回调函数中取到失败返回值
       .catch(function(reson){console.log(resson)})
*/



// //做饭
// function cook() {
//     console.log('开始做饭！')
//     var p = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             console.log('做饭完毕！')
//             resolve('西红柿炒鸡蛋')
//         }, 1000);
//     });
//     return p;
// }

// //吃饭
// function eat(data) {
//     console.log('开始吃饭：'+data);
//     var p = new Promise(function(resolve,reject){
//         setTimeout(() => {
//             console.log('吃饭完毕！');
//             resolve('一个碗一双筷子');
//         }, 2000);
//     });
//     return p;
// }

// //洗碗
// function wash(data) {
//     console.log('开始洗碗：'+data)
//     var p = new Promise(function (resolve,reject) {
//         setTimeout(() => {
//             console.log('洗碗完毕！');
//             resolve('干净的碗筷');
//         }, 3000);
//     });
//     return p;
// }

// cook().then(function (data) {
//     return eat(data);
// }).then(function (data) {
//     return wash(data);
// }).then(function (data) {
//     console.log(data)
// })

// var promise_1 = new Promise(function(resolve,reject){
//     var timeOut = Math.random()*2;
//     console.log(`set timeout to:${timeOut}seconds`);
//     setTimeout(() => {
//        if(timeOut<1){
//            console.log(`call resolve()...`);
//            resolve('200 OK');
//        }else{
//            console.log(`call reject()...`);
//            reject(`timeout in ${timeOut}seconds`);
//        }
//     }, timeOut*1000);
// })

// var promise_2 = promise_1.then(function (result) {
//     console.log(`成功：${result}`);
// })
// var promise_3 = promise_2.catch(function (reson) {
//     console.log(`失败：${reson}`)
// })

new Promise(function(resolve,reject){
    var timeOut = Math.random()*2;
    console.log(`set timeout to:${timeOut}seconds`);
    setTimeout(() => {
       if(timeOut<1){
           console.log(`call resolve()...`);
           resolve('200 OK');
       }else{
           console.log(`call reject()...`);
           reject(`timeout in ${timeOut}seconds`);
       }
    }, timeOut*1000);
}).then(function (result) {
    console.log(`成功：${result}`)
}).catch(function (reson) {
    console.log(`失败：${reson}`)
})


//下面代码展示一连串promise对象
// 0.5秒后返回input*input的计算结果:
function multiply(input) {
    return new Promise(function (resolve, reject) {
        log('calculating ' + input + ' x ' + input + '...');
        setTimeout(resolve, 500, input * input);
    });
}

// 0.5秒后返回input+input的计算结果:
function add(input) {
    return new Promise(function (resolve, reject) {
        log('calculating ' + input + ' + ' + input + '...');
        setTimeout(resolve, 500, input + input);
    });
}

var p = new Promise(function (resolve, reject) {
    log('start new Promise...');
    resolve(123);
});

p.then(multiply)
 .then(add)
 .then(multiply)
 .then(add)
 .then(function (result) {
    log('Got value: ' + result);
});


//真实实际应用中的promise， 比如ajax请求

// ajax函数将返回Promise对象:
function ajax(method, url, data) {
    var request = new XMLHttpRequest();
    return new Promise(function (resolve, reject) {
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(request.status);
                }
            }
        };
        request.open(method, url);
        request.send(data);
    });
}

var log = document.getElementById('test-promise-ajax-result');
var p = ajax('GET', '/api/categories');
p.then(function (text) { // 如果AJAX成功，获得响应内容
    log.innerText = text;
}).catch(function (status) { // 如果AJAX失败，获得响应代码
    log.innerText = 'ERROR: ' + status;
});