// Write Number in Expanded Form

/* Link: https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
Instruction: 
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0. */

function expandedForm(num) {
	num = num.toString();
	const result = [];
	let multi = 1;

	for (let i = 1; i <= num.length; i++) {
		const digit = num[num.length - i];

		digit > 0 && result.unshift(digit * multi);

		multi *= 10;
	}

	return result.join(' + ');
}

// OTHER SOLUTION:

// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");

// var expandedForm = (num) => {
//   var arr = num.toString().split('').reverse();
//   var result = [];
//   for(var i = 0; i < arr.length; i++){
//     arr[i] == 0 ? result.push() : result.push(arr[i] + ('0'.repeat(i)))
//   }
//   return result.reverse().join(' + ')
// }
