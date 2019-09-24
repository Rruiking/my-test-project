/*
    vue中的双向绑定
    Object.defineProperty
*/


// 这是将要被劫持的对象
const data = {
    name: '',
    age: ''
};

function say(name) {
    if (name === '古天乐') {
        console.log('给大家推荐一款超好玩的游戏');
    } else if (name === '渣渣辉') {
        console.log('戏我演过很多,可游戏我只玩贪玩懒月');
    } else {
        console.log('来做我的兄弟');
    }
}

// 遍历对象,对其属性值进行劫持
Object.keys(data).forEach(function (key) {
    console.log(key)
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            console.log('get');
        },
        set: function (newVal) {
            // 当属性值发生变化时我们可以进行额外操作
            console.log(`大家好,我系${newVal}`);
            say(newVal);
        },
    });
});

data.name = '渣渣辉';//触发set
console.log(data.name)//触发get
//大家好,我系渣渣辉
//戏我演过很多,可游戏我只玩贪玩懒月


//简单实现双向绑定
const obj = {};
Object.defineProperty(obj, 'text', {
    get: function () {
        console.log('get val');& emsp;
    },
    set: function (newVal) {
        console.log('set val:' + newVal);
        document.getElementById('input').value = newVal;
        document.getElementById('span').innerHTML = newVal;
    }
});

const input = document.getElementById('input');
input.addEventListener('keyup', function (e) {
    obj.text = e.target.value;
})
