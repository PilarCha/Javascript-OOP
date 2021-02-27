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

//mag constructor
function Magazine(title,author,year,month) {
  Book.call(this,title,author,year);

  this.month = month;

}

function Textbook(title,author,year,edition,publisher) {
  Book.call(this,title,author,year);

  this.edition = edition;
  this.publisher = publisher;
}

//inherit prototype
Magazine.prototype = Object.create(Book.prototype);
Textbook.prototype = Object.create(Book.prototype);

const mag1 = new Magazine('Big booty', 'john doe', 2012, 'Dec')
const text1 = new Textbook('Words','Words boy', 2020, '5th', 'Penguin')

console.log(mag1)

console.log(text1.getSummary())
