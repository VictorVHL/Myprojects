const mongoose = require('mongoose');
const Category = require('./category.model');

module.exports.categoryregister = async (req,res) => {
const newcategory = await Category.create({
    _id : mongoose.Types.ObjectId(),
    name : req.body.name
})
return res.status(200).json(newcategory);
}


module.exports.allcategory = async (req,res) => {
    const allcategory = await Category.find({});
    return res.status(200).json(allcategory);
}





