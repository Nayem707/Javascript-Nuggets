// 📝 Problem: Find Available Quantity for a Specific Size in Product Variants

// You are given a product object that contains multiple colors, and each color has a list of sizes with their corresponding available quantities.

// 👉 Task: Write logic to check if a specific size (e.g., "M") is available under each color, and if it is, show how many quantities are available. If that size is not available for a color, show "Not available".

const availableColors = [
  {
    color: { en: 'Red', ar: 'أحمر' },
    sizes: [
      { size: 'S', quantity: 10 },
      { size: 'M', quantity: 15 },
    ],
  },
  {
    color: { en: 'Blue', ar: 'أزرق' },
    sizes: [
      { size: 'S', quantity: 10 },
      { size: 'M', quantity: 12 },
    ],
  },
];

// Logic
availableColors.forEach((c) => {
  const mSize = c.sizes.find((s) => s.size === 'M');

  if (mSize) {
    console.log(`${c.color.en} - M size available: ${mSize.quantity}`);
  } else {
    console.log(`${c.color.en} - M size not available`);
  }
});

// Logic
if (availableColors && availableColors.length > 0) {
  const colors = availableColors.map((c) => c.color.en);

  console.log('Available colors:', colors.join(', '));
} else {
  console.log('Colors not available');
}

// Logic
if (availableColors && availableColors.length > 0) {
  const sizes = availableColors.flatMap((c) => c.sizes.map((s) => s.size));

  console.log('Available sizes:', sizes.join(', '));
} else {
  console.log('Sizes not available');
}
