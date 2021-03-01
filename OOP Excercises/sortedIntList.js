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
  constructor() {
    super(list,listCount);
  }
}

const int1 = new IntList();

console.log(int1.addItem(4));
console.log(int1.addItem(3));
console.log(int1.addItem(1));
console.log(int1.getSize());
