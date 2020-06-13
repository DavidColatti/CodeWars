// Count characters in your string

/* https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
Instruction: 
The main idea is to count all the occurring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should be empty object literal { }
 */

function count(str) {
  let obj = {};

  str.split("").map((each) => (obj[each] = obj[each] + 1 || 1));

  return obj;
}

// OTHER SOLUTIONS

// function count(string) {
//   return string.split("").reduce(function (obj, elem) {
//     if (elem in obj) obj[elem]++;
//     else obj[elem] = 1;
//     return obj;
//   }, {});
// }
