const router = require('express').Router()
// require("../Db/Connection")
const User = require("../Db/Models/UserSchema")
router.get("/" , (req , res)=>{
    res.send("Server is OOK")
})

// router.get("/register", async(req,res)=>{
//     const user = await new User({
//         username : "ibrarSoomro",
//         email : "ibrar@gmail.com",
//         password : "soomro123"
//     })

//     await user.save()
//     res.status(200).json({message : "Ok"})
// })


router.post("/register", async (req,res)=>{
    const {username , email, password} = req.body
        

    if(!username || !email || !password){
        return res.status(400).json({error : "Please enter correct data"})
    }

    const userLogin = await User({email : email})

    if(!userLogin){
        return res.status(400).json({error : "Please enter your email"})
    }

    
})


module.exports = router
