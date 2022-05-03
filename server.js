require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const port = 5000
app.use(express.static('public'))
app.set('view engine','ejs')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',() => console.log('connection to database'))
require('./server/models/Category.js');
//app.use(cors())
app.use(express.json())

/*app.get('/',(request,response)=>{
    response.type('text/html')
    response.send('<a href="index.html"></a>')
})*/



app.get("/",(req,res) =>{
    res.render('index')
})
app.get("/howto",(req,res) =>{
    res.render('Howto')
})
app.get("/menu",(req,res) =>{
    res.render('menu')
})

app.listen(port, () => {

console.log(`Server Started at http://localhost:${port}`)})