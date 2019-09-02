var arr = [1,2,[3,4],1,[1,[1,2,4,[1,2,[1,4]]],5]];
function splitArr(arr) {
    var resultArr= [];
	debugger;
    arr.forEach(element => {
		debugger;
        if(Array.isArray(element)){
            resultArr.push(splitArr(element))
        }else{
            resultArr.push(element) 
        }
    });
    return resultArr;
}

console.log(splitArr(arr));