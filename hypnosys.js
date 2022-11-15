var spiralOrder = function(move) {
    // declaration of a two-dimensional array
// 5 is the number of rows and 4 is the number of columns.
    const matrix = new Array(5).fill(0).map(() => new Array(4).fill(0));
    let x = move.length;
    let left=0;
    let right=matrix[0].length-1;
    let top=0;
    let down=matrix.length-1;
    let countUp = 0, countDown = 0;
    let countLeft = 0, countRight = 0;
    let res=[[0,0]]
    for(let i=0;i<x;i++){
          
         if(move[i]=='U' && top>0){
            countUp++
            res.push([(countRight - countLeft),(countUp - countDown)])
             
         } 
        else if(move[i]=='D' && down<matrix.length){
            countDown++;
            res.push([(countRight - countLeft),(countUp - countDown)])
            
        }   
        else if(move[i]=='L' && left>0){
            countLeft++;
            res.push([(countRight - countLeft),(countUp - countDown)])
            
        } 
        else if(move[i]=='R' && right<matrix[0].length ) {
            countRight++;
            res.push([(countRight - countLeft),(countUp - countDown)])
            
        }
        }
    return res
             
};
let arr = spiralOrder('RR')
var arrText = "";
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        arrText+=arr[i][j]+' ';
    }
    console.log(arrText);
    arrText='';
}
