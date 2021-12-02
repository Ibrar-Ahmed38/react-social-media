const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require("../Db/Models/UserSchema")

router.get("/" , (req , res)=>{
    res.send("Server is OOK")
})


router.post("/register",async (req,res, next)=>{
    const {username , email , password} = req.body
    console.log(req.body)

    try{
        const user = await  User.findOne({email:email})

        if(user){
           return res.status(400).json({err : "user is Already"})
        }
    
        const newReg = await new User({username, email, password})
        // sendToken.status(201).json(token)
        await newReg.save()
        res.status(201).json({sucess : "Registeration sucessfully done"}) 

    }catch(err){
        
    }   
   
}) 

router.post("/login", async (req,res)=>{
   

    const {email, password} = req.body

    const sendToken = (user, res, req)=>{
        const token = user.getSignedToken()
        res.status(201).json({sucess : true})
    }


    console.log(req.body)
    if(!email || !password){
        return res.status(400).json({err : "Fill both fileds"})
    }
    const userLogin = await User.findOne({email : email})

    if(!userLogin){
        return res.status(404).json({err : "you are not register"})
    }

    const isMatch = await userLogin.matchPasswords(password)
    
    if(!isMatch){
        return res.status(400).json({err : "password not matched"})
    }   
    
    sendToken.status(201).json({sucess : true, token})
    res.status(200).json({sucess : "Login Scuessfull",
    
    })

    
})



module.exports = router
