const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./user.model');
const setings = require('../setings');
const jwt = require('jsonwebtoken');

module.exports.register =  (req,res) => {
   bcrypt.hash(req.body.password, setings.ROUNDS, (err,hash) => {
       User.create({
        _id : mongoose.Types.ObjectId(),
         name : req.body.name,
         email : req.body.email,
         password : hash
       })
       .then(newuser => {
           return res.status(200).json(newuser);
       })
       .catch(err => {
           return res.status(402).json(err);
       })
    });   
}

module.exports.login = async (req,res) => {
const user = await User.findOne({email : req.body.email})
console.log(user);
if(user) {
    const result = await bcrypt.compare(req.body.password , user.password)
    console.log(result);
    if(result === false){
        res.status(401).json({
            message : 'login failed'
        })
    }
}
else {
    res.status(401).json({
        message : 'user not defaind'
    })
}
const token = jwt.sign({userId : user._id}, setings.jwt_secret);
res.status(200).json({
    user : user,
    token : token
})
}

module.exports.allUsers = async (req,res) => {
    const alluser = await User.find({});
    return res.status(200).json(alluser);
}
