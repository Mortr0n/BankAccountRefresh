class BankAccount {
    constructor(intRate, balance = 0) {
        this.intRate = intRate * .01;
        this.balance = balance;
        this.fee = 5;
    }

    makeDeposit(amount) {
        this.balance += amount;
        return this;
    }

    makeWithdrawal(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            return this;
        }
        console.log("Insufficient funds.  Charging a $" + this.fee);
        this.balance -= this.fee;
        return this;
    }

    displayAccountInfo() {
        console.log("Balance is $" + this.balance);
        return this;
    }

    yieldInterest() {
        this.balance += this.balance * this.intRate;
        return this;
    }
}

const bank = new BankAccount(1, 10);
const newAccount = new BankAccount(2, 1000);
bank.makeDeposit(1000).displayAccountInfo().makeWithdrawal(1015).displayAccountInfo().makeWithdrawal(100).displayAccountInfo();
bank.makeDeposit(2000).makeDeposit(200).makeDeposit(15).makeWithdrawal(35).yieldInterest().displayAccountInfo();
bank.yieldInterest().displayAccountInfo();
newAccount.makeDeposit(200).makeDeposit(99).makeWithdrawal(90).makeWithdrawal(87).makeWithdrawal(1000).displayAccountInfo().makeWithdrawal(1000).yieldInterest().displayAccountInfo();