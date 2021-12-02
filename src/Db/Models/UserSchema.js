const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 4,
      max: 20,
    },

    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      min: 6,
    },

    profilePicture: {
      type: String,
      default: "",
    },

    followers: {
      type: Array,
      default: [],
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);


userSchema.pre('save', async function(next){
  if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 12)
  }
  next()
})

userSchema.methods.matchPasswords = async function(password){
  return bcrypt.compare(password, this.password)
}

userSchema.methods.getSignedToken = async function(){
  return jwt.sign({id: this._id}, process.env.JWT_SECRETE,{
    expiresIn:process.env.JWT_SECRETE,
  }) 
}


module.exports = mongoose.model("user", userSchema);
