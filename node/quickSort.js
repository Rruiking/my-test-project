// 快速排序
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    var midEleIndex = parseInt(arr.length / 2);
    console.log(arr)
    var leftArr = [];
    var rightArr = [];
    console.log(arr[midEleIndex]);
    var midEle = arr[midEleIndex];
    arr.splice(midEleIndex, 1);
    console.log(arr)
    arr.forEach(element => {
        if (element <= midEle) {
            leftArr.push(element)
        } else {
            rightArr.push(element)
        }
    });
    console.log('左：' + leftArr)
    console.log('右：' + rightArr)
    return quickSort(leftArr).concat([midEle]).concat(quickSort(rightArr))
}
var arr = [5, 3, 2, 6, 7, 9, 8, 1];
console.log(quickSort(arr))