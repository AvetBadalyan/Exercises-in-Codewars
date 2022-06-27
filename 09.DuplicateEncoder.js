// Duplicate Encoder
/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" 
if that character appears only once in the original string, or ")" 
if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("  */

// 1st Solution
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map((letter, index, array) => {
      if (array.indexOf(letter) === array.lastIndexOf(letter)) {
        return "(";
      } else {
        return ")";
      }
    })
    .join("");
}

console.log(duplicateEncode("letter")); // ())))(

// 2nd solution
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}
