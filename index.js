let db = {
  donuts: []
}
let uuid = require('uuid/v4')

function createDonut (type, price, brand, rating) {
  let donut = {
    id: uuid(),
    type,
    price,
    brand,
    rating
  }
  if (price < 0) {
    throw new Error('Error: price must be positive!')
  }
  db.donuts.push(donut)
  return donut
}

function getAllDonuts () {
  return db.donuts
}

function getDonutById () {
  return db.donuts.find(donut => donut.id == id)
}

//routes
let express = require('express')
let app = express()
let bodyParser = requrie('body-parser')

//Get routes
app.get('/donuts', (req, res) => {
  let donuts = getAllDonuts()
  res.json({data: donuts})
})

app.get('/donuts/id', (req, res) => {
  let id = req.params.id
  let donuts = getDonutById(id)
  res.json({data: donut})
})

app.post('/donuts', (req, res) => {
  let {type, price, brand, rating} = req.body
  let donut = createDonut(type, price, brand, rating)
  res.json({data: donut})
})

// createDonut('sprinkles', 5000, 'cat', 5)
// let allDonuts = getAllDonuts()
// console.log('all donuts', allDonuts);
// let donut = getDonutById(allDonuts[0].id)
// console.log(donut)
