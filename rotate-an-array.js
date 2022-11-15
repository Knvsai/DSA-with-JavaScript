function rotateRight(arr){
    let last = arr.pop();
        arr.unshift(last);
        return arr;

}
console.log(rotateRight([1,2,3,4]))