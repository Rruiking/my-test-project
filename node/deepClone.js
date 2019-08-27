// 实现深浅拷贝
// array的concat和slice是浅拷贝

/*
    下面代码测试array的slice和concat

    //slice 
    let a = [1, 2, 3, 4];
    let b = a.slice();
    console.log(a === b); // -> false

    a[0] = 5;
    console.log(a); // -> [5, 2, 3, 4]
    console.log(b); // -> [1, 2, 3, 4]

    //concat
    let a = [1, 2, 3, 4];
    let b = a.concat();
    console.log(a === b); // -> false

    a[0] = 5;
    console.log(a); // -> [5, 2, 3, 4]
    console.log(b); // -> [1, 2, 3, 4]

    //concat和slice看起来是深拷贝，其实是浅拷贝

    let a = [[1, 2], 3, 4];
    let b = a.slice();
    console.log(a === b); // -> false

    a[0][0] = 0;
    console.log(a); // -> [[0, 2], 3, 4]
    console.log(b); // -> [[0, 2], 3, 4]

    let a = [[1, 2], 3, 4];
    let b = a.concat();
    console.log(a === b); // -> false

    a[0][0] = 0;
    console.log(a); // -> [[0, 2], 3, 4]
    console.log(b); // -> [[0, 2], 3, 4]

*/

/*
    json的stringfy()和parse()是深拷贝


    let obj = {
        name: 'leeper',
        age: 20,
        friend: {
            name: 'lee',
            age: 19
        }
    };
    let copyObj = JSON.parse(JSON.stringify(obj));
    obj.name = 'Sandman';
    obj.friend.name = 'Jerry';
    console.log(obj);
    // -> {name: "Sandman", age: 20, friend: {age: 19,name: 'Jerry'}}
    console.log(copyObj);
    // -> {name: "leeper", age: 20, friend: {age: 19,name: 'lee'}}

*/

var data = {
    name: 'Rr',
    age: 24,
    job: ['developer', 'helper', { b: 'leader', y: 'chief' }],
    sex: {
        man: true,
        woman: false
    },
    test: function () {
        console.log('test')
    }
}
function deepClone(data) {
    var newData = (Array.isArray(data)) ? [] : {};
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            if (data[key] instanceof Object) {
                newData[key] = deepClone(data[key])
            } else {
                newData[key] = data[key]
            }
        }
    }
    return newData
}
console.log(deepClone(data))