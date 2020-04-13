// Unique In Order

/* Link: https://www.codewars.com/kata/54e6533c92449cc251001667
Instruction: 
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements. */

let uniqueInOrder = (iterable) => {
    return [...iterable].filter((element, index, arr) => element !== arr[index-1]) 
}


// OTHER SOLUTION:

// let uniqueInOrder = (iterable) => {
// 	let cleanArray = [];
// 	let iterableArray = [...iterable]


// 	for (let i = 0; i < iterableArray.length; i++) {
// 		if (iterableArray[i] !== iterableArray[i - 1]) {
// 			cleanArray.push(iterableArray[i]);
// 		}
// 	}
// 	return cleanArray;
// };