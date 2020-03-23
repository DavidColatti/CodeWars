// Exes and Ohs

/* 
Link: https://www.codewars.com/kata/exes-and-ohs/train/javascript
Instruction: 
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

function XO(str) {
    let xLetter = 0;
    let oLetter = 0;

    for (let letter of str) {
        if (letter === 'x' || letter === 'X') {
            xLetter++;
        } else if (letter === 'o' || letter === 'O') {
            oLetter++;
        }
    }

    return xLetter === oLetter;
}
  
  
