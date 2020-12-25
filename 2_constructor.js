// Constructor
function Book(title,author,year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//instatiate an object
const book1 = new Book('book1', 'assman', 2012);
const book2 = new Book('book2', 'boobyman', 2016);

console.log(book1);
