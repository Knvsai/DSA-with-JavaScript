const arr = [1, 3, 5, 7, 9]
const findMinMaxSum = (arr) => {
   let numbers = arr.sort((a,b)=> a-b);
   let maxScore = 0;
   let minScore = 0;
   for(let i = 0; i < numbers.length-1; i++) {
      minScore += numbers[i];
   };
   for(let j = 1; j < numbers.length; j++) {
      maxScore += numbers[j];
   };
   return [minScore, maxScore];
};
console.log(findMinMaxSum(arr));