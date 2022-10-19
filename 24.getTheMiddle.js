/* 
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

getMiddle("test") should return "es"
getMiddle("testing") should return "t"
getMiddle("middle") should return "dd"
getMiddle("A") should return "A"
*/

// 1st solution
function getMiddle(s) {
  let len = s.length;
  if (len % 2 !== 0) {
    return s[(len - 1) / 2];
  } else {
    return s[len / 2 - 1] + s[len / 2];
  }
}

// 2nd solution

function getMiddle(s) {
  var middle = s.length / 2;
  return s.length % 2
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}
