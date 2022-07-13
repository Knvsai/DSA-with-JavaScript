function quickSort(array) {
    // Only change code below this line
    if(array.length<=1){
        return array;
    
    }
    const pivot = array[array.length-1];
    let leftArr = [];
    let rightArr = [];
    for(const el of array.slice(0,array.length-1)){
        el < pivot ? leftArr.push(el) : rightArr.push(el)
    }

    return [...quickSort(leftArr), pivot ,...quickSort(rightArr)] ;
    // Only change code above this line
  }
  console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))