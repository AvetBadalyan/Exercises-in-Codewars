let array = [1, 4, 2, 10, 48, 59, 21];

// sort with 1 iteration
function bubbleSortIncomplete(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
}

console.log(bubbleSortIncomplete(array)); // prints [ 1,  2,  4, 10, 48, 21, 59]

// sort with 2 iteration, IMPURE

function bubbleSortImpure(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSortImpure(array)); // prints [   1,  2,  4, 10,  21, 48, 59]

// Right Sort with PURE function

function bubbleSortPure(arr) {
  let newArray = [...arr];
  for (let i = 0; i < newArray.length - 1; i++) {
    for (let j = 0; j < newArray.length - 1 - i; j++) {
      if (newArray[i] > newArray[i + 1]) {
        [newArray[i], newArray[i + 1]] = [newArray[i + 1], newArray[i]];
      }
    }
  }
  return newArray;
}

console.log(bubbleSortPure(array)); // prints [   1,  2,  4, 10,  21, 48, 59] WITHOUT CHANGING INPUT ARRAY
