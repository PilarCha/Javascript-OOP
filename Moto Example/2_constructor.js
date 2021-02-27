//Constructor

function Moto(make,model,price) {
  this.make = make;
  this.model = model;
  this.price = price;

  this.getSummary = function () {
    return `${this.make} ${this.model} costs a total of ${this.price}`
  }
}

function Keeb(type,switches,ortho) {
  this.type = type;
  this.switches = switches;
  this.ortho = ortho;

  this.getSummary = function () {
    return `${this.type} has a switch of ${this.switches} and being an ortho is ${this.ortho}`
  }
}

const moto1 = new Moto('Husky',"710sm",11000);

const keeb1 = new Keeb('lily58',"white",true)

console.log(moto1)

console.log(keeb1.getSummary())
