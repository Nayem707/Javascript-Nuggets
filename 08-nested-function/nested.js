// Return 3 Times function

// function example(a, b) {
//   return function (c, d) {
//     return function (e, f) {
//       return a * c * e + b * d * f;
//     };
//   };
// }

const example = (a, b) => (c, d) => (e, f) => a * c * e + b * d * f;

// Output: 1*3*5 + 2*4*6 = 15 + 48 = 63
console.log(example(1, 2)(3, 4)(5, 6));
// console.log(example(1, 2)(3, 4)(5, 6));
// console.log(example(1, 2)(3, 4)(5, 6));

function mult() {
  const arg = [...arguments];
  console.log(arg);
}

const arr = [1, 2, 3, 4, 5];

mult(arr);
