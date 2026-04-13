class User {
  constructor(name) {
    this.name = name;
  }
}

const u1 = new User("Nayem");
const u2 = new User("Rahim");

console.log(u1.name);
console.log(u2.name);

console.log("After Changed..........");

u1.name = "Islam";
u2.name = "Karim";

console.log(u1.name); // Islam
console.log(u2.name); // Karim
