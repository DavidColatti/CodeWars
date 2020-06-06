// The Vowel Code

/* Link: https://www.codewars.com/kata/53697be005f803751e0015aa
Instruction: 
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels. */

const vowels = {
	a: 1,
	e: 2,
	i: 3,
	o: 4,
	u: 5
};

function encode(string) {
	return [ ...string ]
		.map((each) => {
			if (Object.keys(vowels).indexOf(each) + 1 !== 0) {
				return vowels[each];
			} else {
				return each;
			}
		})
		.join('');
}

function decode(string) {
	return [ ...string ]
		.map((each) => {
			if (Object.values(vowels).find((vowelNum) => vowelNum == each)) {
				for (let char in vowels) {
					if (vowels[char] == each) {
						return char;
					}
				}
			} else {
				return each;
			}
		})
		.join('');
}

// OTHER SOLUTION:

// turn vowels into numbers
// function encode(string){
//   return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
// }

// //turn numbers back into vowels
// function decode(string){
//   return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
// }

// const table = ['a', 'e', 'i', 'o', 'u']
// const encode = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
// const decode = string => string.split('').map(x => table[Number(x) - 1] || x).join('')
