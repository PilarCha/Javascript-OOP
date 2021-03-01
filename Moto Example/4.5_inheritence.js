// using ES6 syntax
class Dog {
  constructor(name,weight) {
    this.name = name;
    this.weight = weight;
  }

  speak() {
    return 'Woof';
  }

}

class Labrador extends Dog {
  constructor(name) {
    super(name);
    this.weight = 75;
  }
  speak() {
    return 'WOOF';
  }
  getWeight() {
    return this.weight;
  }

}

class Yorkshire extends Dog {
  constructor(name) {
    super(name);
    this.weight = 10;
  }
  speak() {
    return 'woof';
  }
}

const doggo = new Dog('Bobbie',70);
console.log(doggo.speak());

const doggo1 = new Labrador('Homie');
console.log(doggo1.speak());
console.log(doggo1.getWeight());

const doggo2 = new Yorkshire('Shitty');
console.log(doggo2.speak());
