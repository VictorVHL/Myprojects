const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        require : true
    },
    data : {
        type : Date,
        require : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        res : 'User'
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        res : 'Category'
    }
})

module.exports = mongoose.model('Article', articleSchema);