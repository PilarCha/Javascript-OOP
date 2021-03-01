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
  constructor(name,weight) {
    super(name,weight);
  }
  speak() {
    return 'WOOF';
  }

}

const doggo = new Dog('Bobbie',70);
console.log(doggo.speak());

const doggo1 = new Labrador('Homie',75);
console.log(doggo1.speak());
