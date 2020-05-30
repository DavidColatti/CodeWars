// Break camelCase

/* https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
Instruction: 
Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"
 */

function solution(string) {
	let newStr = '';

	for (let char of string) {
		if (char === char.toUpperCase()) {
			newStr += ` ${char}`;
		} else {
			newStr += char;
		}
	}
	return newStr;
}

// OTHER SOLUTIONS

// function solution(string){
//   return string.replace(/[A-Z]/g, function(c){return " " + c;});
// }

// const solution = string => {
//   return [...string].map((char) => {
//     return (char === char.toUpperCase()) ? ` ${char}` : char;
//   }).join('');
// }
