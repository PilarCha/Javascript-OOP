class BankAccount {
  constructor(pin,amount) {
    this.pin = pin;
    this.amount = amount;
  }

  deposit(pin,amount) {

  }

  withdraw (pin,amount) {

  }

  getBalance (pin) {
    if(pin == this.pin) {
      return this.amount
    }
    return "You have enetered the wrong pin please try again";
  }

  changePin (oldPin,newPin) {

  }

}

const bank1 = new BankAccount(123, 4598674);

console.log(bank1.getBalance(123))
