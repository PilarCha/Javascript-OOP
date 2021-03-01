class IntList {
  constructor() {
    this.list = [];
    this.listCount = 0;
  }

  getSize() {
    return this
  }

  addItem(num) {
    return this.list.push(num);
  }
}

class SortedIntList extends IntList {

  addItem(num) {
    // it has to put it in sorted
    this.list.push(num);
    this.listCount++;
    this.list.sort();
    return this.list;

  }
}

const int1 = new SortedIntList();

console.log(int1.addItem(4));
console.log(int1.addItem(3));
console.log(int1.addItem(1));
console.log(int1.getSize());
