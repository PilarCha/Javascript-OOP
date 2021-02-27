// Constructor
function Book(title,author,year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in the year of ${this.year};`
  }
}

//instatiate an object
const book1 = new Book('book1', 'assman', 2012);
const book2 = new Book('book2', 'boobyman', 2016);

console.log(book1);
