let Donut = require('./model.js')

let getDonutsController = (req, res) => {
  let donuts = Donut.getAllDonuts()
  res.json({data: donuts})
}

let getDonutIdController = (req, res) => {
  let id = req.params.id
  let donut = Donut.getDonutById(id)
  res.json({data: donut})
}

let createDonutController = (req, res) => {
  let {type, price, brand, rating} = req.body
  let donut = Donut.createDonut(type, price, brand, rating)
  res.json({data: donut})
}

module.exports = { getDonutsController, getDonutIdController, createDonutController }
