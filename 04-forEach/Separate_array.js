// Separate numbers, strings, and characters from an array
// and store them in different arrays
// Finally, print the arrays

const arr = [1, 'c', 'nayem', 'd', 5];

const num = [];
const str = [];
const chr = [];

// console.log(typeof 'nayem', typeof 5, typeof 'b');

arr.forEach((item) => {
  if (typeof item === 'number') {
    num.push(item);
  }
  if (typeof item === 'string') {
    if (item.length === 1) {
      chr.push(item);
    } else {
      str.push(item);
    }
  }
});

console.log('Numbers:', num);
console.log('Strings:', str);
console.log('Characters:', chr);
