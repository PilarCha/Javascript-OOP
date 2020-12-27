//Object create prototype
const bookProtos = {
  getSummary: function() {
    return `${this.title} was written by ${this.author} in the year of ${this.year};`
  },
  getAge: function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`
  }
}

//create Object
// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'AssMan'
// book1.year = 2012

const book1 = Object.create(bookProtos, {
  title:{value:'Book One'},
  author: {value:'Assman'},
  year: {value: 2012}
});

console.log(book1.getSummary())
