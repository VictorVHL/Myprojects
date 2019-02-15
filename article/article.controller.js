const mongoose = require('mongoose');
const Article = require('./article.model');

module.exports.article = async (req,res) => {
    const newarticle =  await Article.create({
        _id: mongoose.Types.ObjectId(),
       name : req.body.name,
       data : new Date(),
       user : req.body.user,
       category : req.body.category
    }) 
    return res.status(200).json(newarticle);
}

