class BankAccount {
  #balance = 0; // private

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();

acc.deposit(1000);
acc.withdraw(200);
console.log(acc.getBalance()); // 800

// ❌ এটা করা যাবে না
// acc.#balance = 100000;
