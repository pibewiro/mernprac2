const Exercise = require("../models/exercise.model");

exports.getExercises = (req,res)=>{
    Exercise.find()
    .then(exercise=>{
        return res.status(200).json(exercise)
    })
    .catch(err=>console.log(err))
}