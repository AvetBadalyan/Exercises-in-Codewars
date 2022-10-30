// Mumbling

/* This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z. */

// 1s solution

function accum(s) {
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    newString += s[i].toUpperCase() + s[i].repeat(i).toLowerCase() + "-";
  }

  return newString.slice(0, -1);
}

// 2nd solution

function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
