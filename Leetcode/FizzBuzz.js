function fizzBuzz(n) {
  // Loop from 1 up to and including n
  for (let i = 1; i <= n; i++) {
    // Check if divisible by both 3 and 5 first
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    // Check if divisible by 3 only
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    // Check if divisible by 5 only
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    // Otherwise, print the number itself
    else {
      console.log(i);
    }
  }
}

const n = 15; // Example input
fizzBuzz(n);
