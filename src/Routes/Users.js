const router = require('express').Router()


router.get("/", (req,res)=>{
    res.send("This is a User Router page")
})

module.exports = router