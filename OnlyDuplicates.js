// Only Duplicates

/* Link: https://www.codewars.com/kata/5a1dc4baffe75f270200006b/javascript
Instruction: 
Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee" */

function onlyDuplicates(str) {
    return [...str].filter(e => str.indexOf(e) !== str.lastIndexOf(e)).join('')
}
