const express = require("express");
const app = express();
const dotenv = require("dotenv").config({ path: "./config.env" });
 const port = process.env.PORT || 5000;
const morgan = require("morgan");
const helmet = require("helmet");
require('./Db/Connection')
const userRoute = require("./Routes/users");
const authRoute = require('./Routes/auth')
const errorHandle = require('./error')
// Middlewares

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use(errorHandle)

  // routing 
app.get("/", (req, res) => {
  res.send("Hello this is a Homepage of express js");
});



app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
