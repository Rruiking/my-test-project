// 斐波那契数列

// 简单斐波那契数列迭代，但时间和空间复杂度太高，运行效率太低
function fibonaci_1(n) {
    if (n < 2) {
        return n;
    } else {
        return fibonaci_1(n - 1) + fibonaci_1(n - 2)
    }
}

// 动态规划斐波那契额数列

function fibonaci_2(n) {
    let val = [];
    for (let i = 0; i <= n; ++i) {
        val[i] = 0;
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    else {
        val[1] = 1;
        val[2] = 2;
        for (let i = 3; i <= n; ++i) {
            val[i] = val[i - 1] + val[i - 2];
        }
    }
    return val[n - 1]
}

function fibonaci_3(n) {
    if(n==1||n==2){
        return n
    }
    var a = 1,b=1;
    var temp = a+b;
    for (let i = 2; i < n; i++) {
        temp = a+b;
        a=b;
        b=temp;
    }
    return temp  
}
