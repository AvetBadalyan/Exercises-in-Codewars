// Stop gninnipS My sdroW!
/* Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test" */

//1st solution
function spinWords(string) {
  let stringArray = string.split(" ");
  let newArray = stringArray.map((word) => {
    if (word.length > 4) {
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  });
  let newString = newArray.join(" ");
  return newString;
}

console.log(spinWords("This is another test")); // returns This is rehtona test

// 2nd solutuion
function spinWords(string) {
  return string
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}
