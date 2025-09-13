console.log('=== Dynamic Object Keys ===');

// ✅ Dynamic object property assignment

// Dot notaion
const person = { name: 'Jhone' };

console.log('8-user:', person.name);

person.age = 24;
person.mail = 'jhone@example.com';
person.phone = '1234567890';

console.log('14-user:', person);

// Square bracket notation
const item = {
  'featured-item': ['item1', 'item2'],
  'featured-items': ['item3', 'item4'],
};

console.log(item['featured-item']);
console.log(item['featured-items']);

console.log(['name']);
// =======================================
// Dynamic object keys
// =======================================
const arrOfObject = [
  { id: 1, name: 'Nayem islam', age: 24 },
  { id: 2, name: 'Kamrul islam', age: 28 },
  { id: 3, name: 'Nadim khan', age: 27 },
];

console.log('WAY 1:');
//=======================================
// WAY 1: Accessing object properties
//=======================================
const index = 0; // Example index
const idKey = 'id'; // Example key
const nameKey = 'name'; // Example key
const ageKey = 'age'; // Example key

console.log(arrOfObject[index][idKey]);
console.log(arrOfObject[index][nameKey]);
console.log(arrOfObject[index][ageKey]);

console.log('WAY 2:');
//=======================================
// WAY 2: Using a function to get value
//=======================================
function getValue(index, key) {
  return arrOfObject[index][key];
}

console.log(getValue(index, idKey));
console.log(getValue(index, nameKey));
console.log(getValue(index, ageKey));

console.log('WAY 3:');
//=======================================
// WAY 3: Using map to extract values
//=======================================
const ids = arrOfObject.map((obj) => obj[idKey]);
const names = arrOfObject.map((obj) => obj[nameKey]);
const ages = arrOfObject.map((obj) => obj[ageKey]);

console.log(ids[index]);
console.log(names[index]);
console.log(ages[index]);

console.log('WAY 4:');
// =======================================
// WAY 4: Using forEach to extract values
// =======================================
const idsWayFour = [];
const namesWayFour = [];
const agesWayFour = [];

arrOfObject.forEach((obj) => {
  idsWayFour.push(obj[idKey]);
  namesWayFour.push(obj[nameKey]);
  agesWayFour.push(obj[ageKey]);
});

console.log(idsWayFour[index]);
console.log(namesWayFour[index]);
console.log(agesWayFour[index]);

console.log('WAY 5:');
// =======================================
// WAY 5: Using reduce to extract values
// =======================================
const idsWayFive = arrOfObject.reduce((acc, obj) => {
  acc.push(obj[idKey]);
  return acc;
}, []);

const namesWayFive = arrOfObject.reduce((acc, obj) => {
  acc.push(obj[nameKey]);
  return acc;
}, []);

const agesWayFive = arrOfObject.reduce((acc, obj) => {
  acc.push(obj[ageKey]);
  return acc;
}, []);

console.log(idsWayFive[index]);
console.log(namesWayFive[index]);
console.log(agesWayFive[index]);
