class BankAccount {
   constructor(balance = 0) {
       this.balance = balance;
   }
   getBalance(){
       return this.balance;
   }
   deposit(sum){
       return this.balance += sum;
   }
   withdraw(sum){
       if(sum > this.balance){
           console.log("You dont`t have enough money to withdraw");
           return this.balance;
       } else{
           return this.balance -= sum;
       }
   }

}

const account1 = new BankAccount(1000);
console.log("account 1:")

console.log(account1.getBalance());

account1.deposit(500);

console.log(account1.getBalance());

account1.withdraw(200);

console.log(account1.getBalance());
