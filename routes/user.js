const router = require("express").Router();
const User = require("../models/user.model")

router.get("/", (req,res)=>{
    User.find()
    .then((user)=>{
        return res.status(200).json(user)
    })
    .catch(err=>console.log(err))
})

router.get("/:id", (req,res)=>{
    User.findById(req.params.id)
    .then((user)=>{
        return res.status(200).json(user)
    })
    .catch(err=>console.log(err))
})

router.post("/", (req,res)=>{
    
    const newUser = new User({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        username:req.body.username
    })

    newUser.save()
    .then(()=>{
        return res.status(200).json("User Added")
    })
    .catch(err=>console.log(err));
})

router.put("/update/:id", (req,res)=>{
    User.findById(req.params.id)
    .then(user=>{
        user.username = req.body.username,
        user.firstname = req.body.firstname,
        user.lastname = req.body.lastname
        
        user.save()
        .then(ex=>{
            return res.status(200).json(ex)
        })
        .catch(err=>console.log(err));
    })
})

router.delete("/:id", (req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(user=>{
        return res.status(200).json(user)
    })
    .catch(err=>console.log(err))
})

module.exports = router;
