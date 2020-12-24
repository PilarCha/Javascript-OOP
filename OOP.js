//object literal
const book1 = {
  title: 'Book One',
  author: 'John Doe',
  year: '2013',
  getSummary: function() {
    return `${this.title} was written ${this.author} in the year of ${this.year};`
  }
}

const book2 = {
  title: 'Book Two',
  author: 'John Doe',
  year: '2016',
  getSummary: function() {
    return `${this.title} was written ${this.author} in the year of ${this.year};`
  }
}

console.log(book2.getSummary())
