const mongoose = require('mongoose')
// const db = 'mongodb+srv://ibrarsoomro:monogosoomro@cluster0.l4age.mongodb.netsocialmedia/?retryWrites=true&w=majority'
mongoose.connect("mongodb://localhost:27017/User")
.then( ()=>console.log("Connection is OK"))
.catch( (err)=> console.log(err, "Err Found"))
 