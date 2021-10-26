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

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.account = new BankAccount(2, 0);
    }

    deposit(amount) {
        this.account.makeDeposit(amount);
        return this;
    }

}

const chris = new User("Chris", "chris@mortr0n.com");
chris.deposit(100).displayAccountInfo();