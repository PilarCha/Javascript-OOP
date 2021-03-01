// Constructor
function Book(title,author,year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
// prototype is available for all to use. yay.
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in the year of ${this.year};`
}

//getAge get years that passsed
Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`
}

//manipulate data
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true; // revised will be added to the object literal
}

//instatiate an object
const book1 = new Book('book1', 'assman', 2012);
const book2 = new Book('book2', 'boobyman', 2016);

console.log(book2);
book2.revise(2020);
console.log(book2);
