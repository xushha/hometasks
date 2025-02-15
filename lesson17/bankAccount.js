class BankAccount {
    constructor(balance = 0) {
        this._balance = balance;
    }
    getBalance() {
        return this._balance;
    }
    deposit(sum) {
        if (sum > 0) {
            return this._balance += sum;
        } else {
            console.log("Deposit amount must be positive");
        }

    }
    withdraw(sum) {
        if (sum <= 0) {
            console.log("Withdraw amount must be positive");
        }
        if (sum > this._balance) {
            console.log("You don't have enough money to withdraw");
        } else {
            return this._balance -= sum;
        }
    }
}

console.log("Account 1:")
const account1 = new BankAccount(1000);
console.log(account1.getBalance());
account1.deposit(500);
console.log(account1.getBalance());
account1.withdraw(200);
console.log(account1.getBalance());
console.log("Account 2:");
const account2 = new BankAccount();
account1.withdraw(2000);
account1.deposit(-100);
console.log(account2.getBalance());
