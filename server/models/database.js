const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',() => console.log('connection to database'))

require('./Category');