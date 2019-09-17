/*
    重新实现ajax
    ajax原理
    (1) 创建XMLHttpRequest对象,也就是创建一个异步调用对象. 
    (2) 创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息. 
    (3)设置响应HTTP请求状态变化的函数. 
    (4)发送HTTP请求. 
    (5)获取异步调用返回的数据. 
    (6)使用JavaScript和DOM实现局部刷新.
*/

var xmlHttp;
if (window.XMLHttpRequest) {  //针对除IE6以外的浏览器
    xmlHttp = new XMLHttpRequest(); //实例化一个XMLHttpRequest
} else {
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");   //针对IE5,IE6
}


/*
    xmlhttp.open(method, url, async);
    xmlhttp.send();
*/


//onreadystatechange事件可指定一个事件处理函数来处理XMLHttpRequest对象的执行结果。

/*
    open(method,url,async)	规定请求的类型、URL 以及是否异步处理请求。   
    ▪ method:请求的类型:GET 或 POST；  
    ▪ url：文件在服务器上的位置,相对位置或绝对位置；   
    ▪ async：true（异步）或 false（同步）
    send(string)	将请求发送到服务器。string：仅用于 POST 请求
*/


var xmlHttp = new XMLHttpRequest();
xmlHttp.open('get', 'demo_get.html', 'true');//调用open()方法并采用异步方式
xmlHttp.send(); //使用open()方法将请求发送出去
xmlHttp.onreadystatechange=function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {

    }
}

/*
    简单get请求
    xmlHttp.open("GET","demo_get.html",true); 
    xmlHttp.send();

    简单post请求
    xmlhttp.open("POST","ajax_test.html",true); 
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded"); 
    xmlhttp.send("fname=Henry&lname=Ford");
*/

/*
    onreadystatechange	存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。
    readyState	存有 XMLHttpRequest 的状态。
    从 0 到 4 发生变化。    
    ▪ 0: 请求未初始化；    
    ▪ 1: 服务器连接已建立；     
    ▪ 2: 请求已接收；    
    ▪ 3: 请求处理中；     
    ▪ 4: 请求已完成，且响应已就绪
    status	▪ 200: “OK” ； ▪ 404: 未找到页面
*/