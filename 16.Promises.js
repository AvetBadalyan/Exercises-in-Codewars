// setTimeout(() => console.log(1), 3000);
// setTimeout(() => console.log(2), 2000);
// setTimeout(() => console.log(3), 1000);

let promise = new Promise((res, rej) => {
  res();
})
  .then(() => {
    setTimeout(() => console.log(1), 3000);
  })
  .then(() => {
    setTimeout(() => console.log(2), 2000);
  })
  .then(() => {
    setTimeout(() => console.log(3), 1000);
  }); //prints 3 2 1

// CHANGE IT TO RUN IN RIGHT ORDER - 1 2 3

let orderedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(1);
    resolve();
  }, 3000);
})
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(2);
        resolve();
      }, 2000);
    });
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(3);
        resolve();
      }, 1000);
    });
  });

// prints 1 2 3
