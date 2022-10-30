// Credit Card Mask

/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

*/

// 1st solution

function maskify(cc) {
  if (cc.length < 5) {
    return cc;
  }
  let mask = "";
  for (let i = 0; i < cc.length - 4; i++) {
    mask += "#";
  }
  return mask + cc.slice(-4);
}

// 2nd solution

function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, "#");
}
