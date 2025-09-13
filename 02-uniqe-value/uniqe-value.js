console.log('=== Mapping, Deduplication Array Construction ===');

const category = [
  { name: 'food', category: 'eggs' },
  { name: 'cloth', category: 't-shirt' },
  { name: 'electric', category: 'monitor' },
  { name: 'fruit', category: 'apples' },
  { name: 'fruit', category: 'apples' },
];

// ✅ mapping, deduplication, and array construction
// const categories = new Set(category.map((item) => item.category));

const categories = ['all', ...new Set(category.map((item) => item.category))];

console.log(categories);

// ✅ Show output in the browswer
// const catResult = categories.map((item) => item).join(' | ');
// const showData = document.getElementById('demo');
// showData.innerHTML = `<h4>${catResult}</h4>`;

const resultInBrowser = document.getElementById('demo');
resultInBrowser.innerHTML = categories
  .map((item) => {
    return `<button> ${item} </button>`;
  })
  .join('');
