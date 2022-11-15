function indices(num, k){
    let ans = [];
    for(let i=0;i<num.length;i++){
        if(num[i]===k){
            ans.push(i);
        }

    }
    return ans;
    

}
var num = [1, 2, 3, 5, 3, 5, 3];
var k = 3;
var ind = indices(num,k);
    for(let i=0; i<ind.length; i++){
        console.log(ind[i] + " ")
    }
