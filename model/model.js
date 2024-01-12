const mongoose = require('mongoose');

const contact = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Must provide a name'],
        trim:true
    },
    number:{
        type:String,
        required:[true,'Must provide a number'],
        trim:true
    },
    email:{
        type:String,
        required:[true,'Must provide a number'],
        trim:true
    }
});

module.exports = mongoose.model('contacts',contact);