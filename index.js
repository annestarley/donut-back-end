
//routes
let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let cors = require('cors')
// let Donut = require('./model.js')
let DonutController = require('./controller.js')

app.use(cors())
app.use(bodyParser.json())

//Get routes
app.get('/donuts', DonutController.getDonutsController)
app.get('/donuts/:id', DonutController.getDonutIdController)
app.post('/donuts', DonutController.createDonutController)

//PORT
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
