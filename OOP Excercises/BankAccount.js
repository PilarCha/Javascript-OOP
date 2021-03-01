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
    if(oldPin == this.pin) {
      this.pin = newPin
      return "We have updated your pin"
    }
    return "You have entered a non existent pin calling yo mama"

  }

}

const bank1 = new BankAccount(123, 4598674);

console.log(bank1.getBalance(123));
console.log(bank1.changePin(123,234))
console.log(bank1.getBalance(234));
