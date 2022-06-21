// Moving Zeros To The End
/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

function moveZeros(arr) {
  let filteredArray = arr.filter((element) => element !== 0);
  let zeroArray = arr.filter((zero) => zero === 0);
  let finalArray = filteredArray.concat(zeroArray);
  return finalArray;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]
