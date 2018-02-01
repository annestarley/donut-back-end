let db = {
  donuts: [
    {
      "brand": "Old Navy",
      "id": "4ac1eb45-a99c-46dd-8227-d0af641b4153",
      "price": "2",
      "rating": "5.1",
      "type": "Old Fashioned"
    },
    {
      "brand": "Gucci",
      "id": "25e04f41-a922-4e05-8b12-61b4ae1c8f4d",
      "price": "1000",
      "rating": "5",
      "type": "Sprinkles"
    }
  ]
}
let uuid = require('uuid')

function createDonut (type, price, brand, rating) {
  let donut = {
    id: uuid(),
    type,
    price,
    brand,
    rating
  }
  // if (price < 0) {
  //   throw new Error('Error: price must be positive!')
  // }
  db.donuts.push(donut)
  return donut
}

function getAllDonuts () {
  return db.donuts
}

function getDonutById () {
  return db.donuts.find(donut => donut.id == id)
}

module.exports = {createDonut, getAllDonuts, getDonutById}
