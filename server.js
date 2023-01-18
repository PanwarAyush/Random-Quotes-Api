const express = require('express')
const cors=require('cors')
const app = express()
const q=require('./quotes.json')
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
let ind=(Math.random()*1664)|0
  res.send(q[ind])
})
app.listen(8080,()=>{
  console.log('Server started at http://localhost:8080')
})

