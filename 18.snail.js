/* Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

image - https://www.haan.lu/files/2513/8347/2456/snail.png
*/

// 1st solution

const snail = (array) => {
  let finalArray = [];
  while (array.length) {
    finalArray.push(...array.shift());
    for (var i = 0; i < array.length; i++) {
      finalArray.push(array[i].pop());
    }
    finalArray.push(...(array.pop() || []).reverse());
    for (var i = array.length - 1; i >= 0; i--) {
      finalArray.push(array[i].shift());
    }
  }
  return finalArray;
};

// 2nd solution

const snailWithMap = (arr) => {
  var finalArray = [];
  while (arr.length) {
    finalArray.push(...arr.shift());
    arr.map((row) => finalArray.push(row.pop()));
    arr.reverse().map((row) => row.reverse());
  }
  return finalArray;
};
