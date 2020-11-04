const express =  require('express')
const cors = require('cors')
const port = 3000
const app = express()

const pacific = [
    {
      country: "Papua New Guinea",
      capital: "Port Moresby",
      population: "8606000"
    },
    {
      country: "Fiji",
      capital: "Suva",
      population: "883483"
    },
    {
      country: "Solomon Islands",
      capital: "Honiara",
      population: "652858"
    }
  ]

app.use(cors())

app.get('/pacific', (req, res)=>{
    res.send(pacific)
})

app.listen(port, ()=>{
    console.log(`Running at ${port}`)
})