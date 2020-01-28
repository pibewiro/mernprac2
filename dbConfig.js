const mongoose = require("mongoose")
require("dotenv").config();

module.exports = function(){
    const uri = process.env.DB_URI;
    mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true});
    const connection = mongoose.connection;
    connection.once('open', ()=>console.log("Connected to Database"))
}