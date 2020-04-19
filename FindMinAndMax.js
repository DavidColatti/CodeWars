// Find min and max

/* Link: https://www.codewars.com/kata/57a1ae8c7cb1f31e4e000130/train/javascript
Instruction: 
Implement a function that returns the minimal and the maximal value of a list (in this order). */

function getMinMax(arr){

  arr.sort(function(a, b) {
  return a - b;
  });
  
  let min = arr[0];
  let max = arr[arr.length - 1]
  
  let result = [];
  result.push(min);
  result.push(max);
  
  return result;
  
}


// OTHER SOLUTION:

// function getMinMax(arr){
//   return [Math.min(...arr),Math.max(...arr)];
// };