var pivotIndex = function(num){
    if(num.length===0) return -1
    if(num.length===1) return 0

    let sum = num.reduce((sum,n) => sum+n,0)
    let leftSum = 0
    for(let i=0;i<num.length;i++){
        if(leftSum===(sum-leftSum-num[i])){
            return i;
        } else{
            leftSum+=num[i];
        }
    }
    return -1;

}