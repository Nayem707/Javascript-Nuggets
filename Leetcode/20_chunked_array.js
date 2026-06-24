function chunk(array, size) {
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
}

const arr = [1, 2, 3, 4, 5, 6, 7];

console.time("chunk");
const result = chunk(arr, 3);
console.timeEnd("chunk");

console.log(result);
