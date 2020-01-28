const router = require("express").Router();
const {getExercises} = require("../controllers/exercise");

router.get("/", getExercises)

router.get("/:id", (req,res)=>{
    Exercise.findOne(req.params.id)
    .then(exercise=>{
        return res.status(200).json(exercise)
    })
    .catch(err=>console.log(err))
})

router.post("/", (req,res)=>{
    
    const newExercise = new Exercise({
        activity:req.body.activity,
        duration:req.body.duration,
        date:Date.parse(req.body.date),
        username:req.body.username
    })

    newExercise.save()
    .then(()=>{
        return res.status(200).json("Exercise Added")
    })
    .catch(err=>console.log(err))
})

router.put("/update/:id", (req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise=>{
        exercise.activity = req.body.activity,
        exercise.duration = req.body.duration,
        exercise.date = Date.parse(req.body.date),
        exercise.username = req.body.username

        exercise.save()
        .then(ex=>{
            return res.status(200).json(ex)
        })
    })
    .catch(err=>console.log(err))
})

router.delete("/:id", (req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(exercise=>{
        return res.status(200).json(exercise)
    })
    .catch(err=>console.log(err))
})

module.exports = router;