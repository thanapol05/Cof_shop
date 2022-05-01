require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.static('public'))

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',() => console.log('connection to database'))

app.get('/',(request,response)=>{
    response.type('text/html')
    response.send('<a href="index.html"></a>')
})


app.listen(3000, () => console.log('Server Started'))