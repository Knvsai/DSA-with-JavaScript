function insertionSort(array) {
    // Only change code below this line
    for(var i=1;i<array.length;i++){
        for(var j=i;j>0;j--){
            if(array[j]<array[j-1]){
                [array[j-1],array[j]] =[array[j],array[j-1]]
            }
        }
    }
    return array;
    // Only change code above this line
  }
  console.log(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]))