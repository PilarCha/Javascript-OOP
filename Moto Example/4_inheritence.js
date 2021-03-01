// Constructor

function Dog(name) {
  this.weight = 50;
  this.name = name;
}

Dog.prototype.getName = function() {
  return this.name
}

Dog.prototype.speak = function () {
  return `Woof I'm a ${this.name}`
}

Dog.prototype.getWeight = function () {
  return `I am ${this.name}. I weigh ${this.weight}`
}

function Labrador(name,color) {
  Dog.call(this,name);
  this.weight = 75
  this.color = color;
}

Labrador.prototype = Object.create(Dog.prototype);

const doggo1 = new Labrador('Wolfo','gold')
const doggo2 = new Dog('Boobies')
console.log(doggo1.getName())
console.log(doggo1.getWeight());
console.log(doggo2.getWeight());
