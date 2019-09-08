/*
    爬楼梯
    给出n阶台阶，爬楼梯每次迈出1阶获2阶
    求多少种爬上去的方式
    假设有3阶台阶，爬上去的方式为1+1+1，1+2，2+1三种组合方式
    反过来看，最后一步要么是1，要么是2，
    把问题拆开看，当选择是1的时候，后面便剩下2个台阶，f(2),如果选择的是2，后面便剩下1个台阶，f(1)，当前的
    同理，当台阶数量是5，
    不管多少级台阶，最后一步不是1阶就是2阶，
    当台阶数是20的时候，最后一步无非就是1，或者2，剩下的便是19和18，也就说，不管最后迈出的一步是几个台阶，
    对走这个楼梯可以产生的走法不会产生影响，走这个楼梯的走法取决于f(19)和f(18)，所以说，走法的总和是f(19)+f(18)
    以此类推，f(19)=f(18)+f(17),f(18)=f(17)+f(16) ....

    //参考网址 https://www.php.cn/js-tutorial-407906.html
*/

// climbStair_1为一种解法，此方法时间复杂度较高，为 O(2^n),因为f(n-1),f(n-2)不能重复使用
// 典型的斐波那契数列
function climbStair_1(n) {
    if (n < 1) return 0;
    if (n == 1) return 1;
    if (n == 2) return 2;

    return climbStair_1(n - 1) + climbStair_1(n - 2)
}

// 使用外部变量记录是否有该数值，降低复杂度；
const map = new Map();
function climbStair_2(n) {
    if (n < 1) return 0;
    if (n == 1) return 1;
    if (n == 2) return 2;

    if (map.has(n)) {
        return map.get(n)
    }

    const value = climbStair_2(n - 1) + climbStair_2(n - 2)
    map.set(n, value);
    return value;
}

// 动态规划求解
// a保存倒数第二个子状态数据，b保存倒数第一个子状态数据， temp 保存当前状态的数据
function climbStair_3(n) {
    if (n < 1) return 0;
    if (n == 1) return 1;
    if (n == 2) return 2;

    let a = 1, b = 2;
    let temp = a + b;
    for (let i = 2; i < n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return temp;
}