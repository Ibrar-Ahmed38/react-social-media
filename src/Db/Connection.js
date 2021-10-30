const mongoose = require('mongoose')
const Db = "mongodb://ibrarsoomro:mongosoomro@cluster0-shard-00-00.l4age.mongodb.net:27017,cluster0-shard-00-01.l4age.mongodb.net:27017,cluster0-shard-00-02.l4age.mongodb.net:27017/socail?ssl=true&replicaSet=atlas-7dvzif-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(Db)
.then( ()=>console.log("Connection is OK"))
.catch( (err)=> console.log(err, "Database Connection error"))