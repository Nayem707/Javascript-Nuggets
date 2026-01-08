function uppercaseValue(value) {
  console.log(value.toUpperCase());
}

function lowercaseValue(value) {
  console.log(value.toLowerCase());
}

function processValues(name, callback) {
  const fullName = `${name} Islam`;
  callback(fullName);
}

processValues("Nayem", uppercaseValue);
processValues("Nayem", lowercaseValue);

// Output:
// NAYEM ISLAM
// nayem islam

// Explanation:
// 1. We define two functions, `uppercaseValue` and `lowercaseValue`, which take a string value and log it in uppercase and lowercase respectively.
// 2. The `processValues` function takes a name and a callback function as arguments. It constructs a full name by appending " Islam" to the provided name and then calls the callback function with the full name.
// 3. We call `processValues` twice: first with "Nayem" and the `uppercaseValue` function, and then with "Nayem" and the `lowercaseValue` function.
// 4. This results in logging "NAYEM ISLAM" and "nayem islam" to the console.

// Note: Callback functions are functions passed as arguments to other functions, allowing for flexible and reusable code.
// They are commonly used in asynchronous programming and event handling in JavaScript.
// They enable us to define custom behavior that can be executed at a later time or in response to specific events.
// For more information on callback functions, you can refer to the MDN documentation: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

// example :
function fetchData(url, callback) {
  // Simulating an asynchronous data fetch with setTimeout
  console.log("loading...");
  setTimeout(() => {
    const data = `Data from ${url}`;
    callback(data);
  }, 1000);
  console.log("loading complete");
}

fetchData("https://api.example.com/data", (data) => {
  console.log("completed");
  console.log("result: ", data);
});
// Output after 1 second:
// Data from https://api.example.com/data
