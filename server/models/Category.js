const mongoose =require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:'This fild is requird'
    },
    detail:{
        type:String,
        required:'This fild is requid'
    },
    image:{
        type:String,
        required:'This fild is requird'
    },

});

module.export = mongoose.model('Category', categorySchema);