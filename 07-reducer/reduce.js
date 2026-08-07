const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);

console.log(sum); // Output: 15

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 750 },
];

const totalPrice = products.reduce(
  (total, product) => total + product.price,
  0,
);

console.log(totalPrice); // Output: 2250
