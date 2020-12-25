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
