//object literal
const book1 = {
  title: 'Book One',
  author: 'John Doe',
  year: '2013',
  getSummary: function() {
    return `${this.title} was written ${this.author} in the year of ${this.year};`
  }
}

console.log(book1.title)
