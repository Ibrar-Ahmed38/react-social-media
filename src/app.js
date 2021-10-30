const express = require("express");
const app = express();
const dotenv = require("dotenv").config({ path: "./config.env" });
 const port = process.env.PORT || 5000;
const morgan = require("morgan");
const helmet = require("helmet");
require('./Db/Connection')

const UserRoute = require("./Routes/Users");
const AuthRoute = require('./Routes/Auth')

// Middlewares

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/users", UserRoute);
app.use("/auth", AuthRoute);


  // routing 
app.get("", (req, res) => {
  res.send("Hello this is a Homepage of express js");
});


app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
