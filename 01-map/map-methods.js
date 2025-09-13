const database = [
  { id: 1, name: 'Nayem islam', age: 54, amount: 40 },
  { id: 2, name: 'Sojib islam', age: 14, amount: 50 },
  { id: 3, name: 'Tamim islam', age: 24, amount: 60 },
  { id: 4, name: 'Kamrul islam', age: 25, amount: 70 },
  { id: 5, name: 'Mahfuz islam', age: 25, amount: 70 },
];

// ✅ Explicit Return with Arrow Function:
// const result = database.map((item) => {
//   return item.name;
// });

// ✅ Using a Named Function:
// const processData = (item) => item.name;
// const result = database.map(processData);

// ✅ Inline Return with Arrow Function:
// const result = database.map((item) => item.name);

// ✅ Data Mapping and Transformation
// const result = database.map((item) => {
//   return {
//     fullName: item.name.toUpperCase(),
//     oldAge: item.age + 5,
//   };
// });

const outputBrowser = database.map((item) => `<p>${item.id}. ${item.name}</p>`);

console.log('database', outputBrowser);

// ✅ Show output in the browswer
const showData = document.getElementById('demo');
showData.innerHTML = outputBrowser.join(' ');
