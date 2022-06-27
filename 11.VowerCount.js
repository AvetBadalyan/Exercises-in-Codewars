/* Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces. */

// 1st solution
function getCount(str) {
  let sum = 0;
  str
    .split("")
    .map((letter) => {
      if (
        letter === "a" ||
        letter === "e" ||
        letter === "i" ||
        letter === "o" ||
        letter === "u"
      ) {
        sum++;
      }
    })
    .join("");
  return sum;
}

// 2nd solution

function getCount(str) {
  let vowelsCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}

// 3nd solution

function getCount(str) {
  return str.split("").filter((c) => "aeiou".includes(c)).length;
}
