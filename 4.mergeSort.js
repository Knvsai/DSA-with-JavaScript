const merge = (leftArr, rightArr) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;
     while(leftIndex < leftArr.length && rightIndex < rightArr.length){
        const leftEl = leftArr[leftIndex];
        const rightEl = rightArr[rightIndex];

        if(leftEl<rightEl){
            output.push(leftEl)
            leftIndex++;
        }else{
            output.push(rightEl)
            rightIndex++;
        }
     }
     return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

const mergeSort  = array => {
    // Only change code below this line
    if(array.length<=1){
        return array;
    }
    let middleindex = Math.floor(array.length/2);
    let leftArr = array.slice(0,middleindex);
    let rightArr = array.slice(middleindex)

    return merge(
        mergeSort(leftArr),mergeSort(rightArr)
    );
    // Only change code above this line
  }
  console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))