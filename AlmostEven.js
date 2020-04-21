// Almost Eveb

/* Link: https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b/train/javascript
Instruction: 
We need the ability to divide an unknown integer into a given number of even parts — or at least as even as they can be. The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

Example code:

splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
Complete the function so that it returns an array of integer representing the parts. Ignoring the order of the parts, there is only one valid solution for each input to your function! */

let splitInteger = (num, parts) => {
  let array = []
  for(let i = 0; i < parts; i++) {
    array[i] = Math.floor(num / parts) + (i < num % parts)
  }
  return array
}


// OTHER SOLUTION:

// let splitInteger = (num, parts) => {
//   let array = []
//   let num1 = Math.floor(num / parts)
//   let amtOfTimes1 = parts - (num % num1)
//   let amtOfTimes2 = parts - amtOfTimes1
//   let num2 = (num - (num1*amtOfTimes1)) / amtOfTimes2
  
//   while(array.length < amtOfTimes1) {
//     array.push(num1)
//   }

//   while(array.length < parts) {
//     array.push(num2)
//   }
//   return array
// }