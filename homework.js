class BankAccount {
accountNumber;
owner;
#balance;

constructor(_accountNumber, _owner, _balance ) {
    this.accountNumber = _accountNumber;
    this.owner = _owner;
    this.#balance = _balance;
  

  console.log (this.accountNumber);}
 deposit(amount)
 {
    if(amount<=0 ){
        throw new RangeError("pleas enter Valid Amount");
    }
    this.#balance += amount;
 }
 withdraw(amount)  {
    if(this.#balance < amount) {
        throw new RangeError("you dont have engought mony to withdraw");
    }
    this.#balance -= amount;
 }
     getbalance() { 
        return this.#balance; 
    }
  }

  class SavingsAccount extends BankAccount {
  constructor(_accountNumber, _owner, _balance = 0, interestRate = 0.05) {
    super(_accountNumber, _owner, _balance);
    this.interestRate = interestRate;
  }

  addInterest() {
    const interest = this.balance * this.interestRate;
    super.deposit(interest);
    console.log(`Interest added: ${interest}, New balance: ${this.balance}`);
  }
}
class CheckingAccount extends BankAccount {
  
  }

  class CheckingAccount extends BankAccount{
  withdraw(amount) {
    if (this.getbalance -  amount<-100) {
      throw new RangeError("Exceeded overdraft limityout can not overdraft more");
    }

    if (this.balance >= amount) {
      super.withdraw(amount);
    } else {
      const overdraftUsed = amount - this.balance;
      super.withdraw(this.balance); 
      console.log(`Overdraft used: ${overdraftUsed}, New balance: 0`);
    }
  }
}


const savings = new SavingsAccount(101, "Eka", 1000, 0.1);
mysavings.deposit(500);
mysavings.withdraw(200);
mysavings.addInterest();

const mychecking = new CheckingAccount(102, "eka", 500, 200);
mychecking.deposit(300);
mychecking.withdraw(600); 
console.log("Checking balance:", mychecking.getbalance);