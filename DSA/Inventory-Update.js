// function updateInventory(currentInventory, newInventory) {
//   const inventoryByItem = {};

//   // Step 1: Load current inventory
//   for (const [quantity, itemName] of currentInventory) {
//     inventoryByItem[itemName] = quantity;
//   }

//   // Step 2: Apply new inventory updates
//   for (const [quantity, itemName] of newInventory) {
//     inventoryByItem[itemName] = (inventoryByItem[itemName] || 0) + quantity;
//   }

//   // Step 3: Convert to sorted 2D array
//   const convertMap = Object.keys(inventoryByItem).sort();

//   // Step 4: Prepare the final result
//   const result = convertMap.map((itemName) => [
//     inventoryByItem[itemName],
//     itemName,
//   ]);

//   // Log the updated inventory
//   console.log(result);
//   return result;
// }

// Example inventory lists

function updateInventory(currentInventory, newInventory) {
  const inventoryByItem = [...currentInventory, ...newInventory].reduce(
    (acc, [quantity, itemName]) => {
      acc[itemName] = (acc[itemName] || 0) + quantity;
      return acc;
    },
    {},
  );

  // Step 3: Convert to sorted 2D array
  const convertMap = Object.keys(inventoryByItem).sort();

  // Step 4: Prepare the final result
  const result = convertMap.map((itemName) => [
    inventoryByItem[itemName],
    itemName,
  ]);

  // Log the updated inventory
  console.log(result);
}

var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(curInv, newInv);
