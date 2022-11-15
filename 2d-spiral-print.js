var spiralOrder = function(matrix) {
    let left=0;
    let right=matrix[0].length-1;
    let top=0;
    let down=matrix.length-1;
    let d=0
    let res=[]
    while(left<=right && top<=down){
          
         if(d==0){
         for(let i=left;i<=right;i++){
             res.push(matrix[top][i])
         }
        top++
         } 
        else if(d==1){
            for(let i=top;i<=down;i++){
                res.push(matrix[i][right])
            }
         right--;
        }   
        else if(d==2){
            for(let i=right;i>=left;i--){
                res.push(matrix[down][i])
            }
            down--;
        } 
        else {
            for(let i=down;i>=top;i--){
                res.push(matrix[i][left])
            }
           left++
        }
         d=(d+1)%4
        }
    return res
          
    
};
matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(spiralOrder(matrix))
