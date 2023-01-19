const express = require('express')
const cors=require('cors')
const app = express()
const quotes=require('./Quotes_75966.json')
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
let ind=(Math.random()*75966)|0
  res.send(quotes[ind])
})
app.listen(8080,()=>{
  console.log('Server started at http://localhost:8080')
})

