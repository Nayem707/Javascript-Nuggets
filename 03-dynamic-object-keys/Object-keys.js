console.log('=== Dynamic Object Keys ===');

// ✅ Dynamic object property assignment

// dot notaion
const person = {
  name: 'jhone',
};

console.log(person.name);

person.age = 24;

console.log(person);

// square bracket notation
const item = {
  'featured-item': ['item1', 'item2'],
};

console.log(item['featured-item']);
console.log(['name']);

const arr = [
  { id: 1, name: 'nayem', age: 24 },
  { id: 2, name: 'kamrul', age: 28 },
  { id: 3, name: 'nadim', age: 27 },
];

const a = 1;

console.log(arr[a]['id']);
