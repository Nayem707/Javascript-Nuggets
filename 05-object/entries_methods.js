const arr = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.entries(arr));

const ent = Object.entries(arr);

ent.forEach((item) => {
  const [key, value] = item;
  console.log(value);
});
