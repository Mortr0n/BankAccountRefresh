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

