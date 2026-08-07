function chunk(array, size) {
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);

    result.push(chunk);
  }

  return result;
}

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const users = [
  "Nayem",
  "Rahim",
  "Karim",
  "Sakib",
  "Hasan",
  "Rafi",
  "Tamim",
  "Jamal",
  "Arif",
  "Siam",
  "Robin",
  "Rakib",
];

console.time("chunk");
const result = chunk(users, 3);
console.timeEnd("chunk");

console.log(result);
