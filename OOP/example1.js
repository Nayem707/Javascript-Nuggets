class mobile {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `Mobile Name: ${this.name}, Price: ${this.price}`;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

const m1 = new mobile("iPhone", 1000);
console.log(m1.getInfo()); // Mobile Name: iPhone, Price: 1000
console.log(m1.getName()); // iPhone
console.log(m1.getPrice()); // 1000

class tablet extends mobile {
  constructor(name, price, screenSize) {
    super(name, price);
    this.screenSize = screenSize;
  }
}

const t1 = new tablet("iPad", 800, "10.5 inches");
console.log(t1.getInfo());
// Mobile Name: iPad, Price: 800
console.log(t1.screenSize); // 10.5 inches
