const moto1 = {
  title: '690smc',
  brand: 'KTM',
  price:'12000',
  getSummary: function () {
    return `${this.brand} ${this.title} costs a total cost of ${this.price}`
  }
}

console.log(moto1.getSummary())
