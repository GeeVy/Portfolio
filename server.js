const express =  require('express')
const cors = require('cors')
const port = 8080
const app = express()

const pacific = [
    {
      country: "Papua New Guinea",
      capital: "Port Moresby",
      population: "8,606,000"
    },
    {
      country: "Fiji",
      capital: "Suva",
      population: "883,483"
    },
    {
      country: "Solomon Islands",
      capital: "Honiara",
      population: "652,858"
    }
  ]

app.use(cors())

app.get('/pacific', (req, res)=>{
    res.send(pacific)
})

app.listen(port, ()=>{
    console.log(`Running at ${port}`)
})