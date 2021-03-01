function Moto(make,model,price,savings) {
  this.make = make;
  this.model = model;
  this.price = price;
  this.savings = savings;
}

//can be used by all
Moto.prototype.getSummary = function () {
  return `${this.make} ${this.model} costs a total of ${this.price}`
}

Moto.prototype.getIt = function() {
  const poor = ((this.price > this.savings) ? false : true);
  return `You are ${poor} from purchasing it`
}

Moto.prototype.revisePrice = function (newPrice) {
  this.price = newPrice;
  this.revised = true;
}

const moto1 = new Moto('ktm','450sm',6500,12000);

console.log(moto1.getIt());
moto1.revisePrice(24000);
console.log(moto1.getIt());
console.log(moto1);
