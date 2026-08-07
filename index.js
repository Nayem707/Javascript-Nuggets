function map(name, callback) {
  const fullName = name + " Islam";

  callback(fullName);
  callback(fullName);
  callback(fullName);
}

map("Nayem", function (value) {
  console.log(value.toUpperCase());
});

// Output:
// NAYEM ISLAM
// NAYEM ISLAM
// NAYEM ISLAM
