const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    activity:{type:String, required:true},
    duration:{type:Number, required:true},
    username:{type:String, required:true},
    date:{type:Date, required:true}
}, {timestamps:true});

const Exercise = mongoose.model("exercise", exerciseSchema);
module.exports = Exercise;