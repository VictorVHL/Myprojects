const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

app.listen(4000,()=>{
    console.log("Server is running")
});

mongoose.connect(
    'mongodb://localhost:27017/blog',
    {useNewUrlParser: true},
    () => {
        console.log('connect to database...')
    }
);


app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());

app.use('/',(req,res)=>{
res.status(200).json({"message":"Everything is great"})
});

const Userrouter = require('./user/user.router');
app.use('/users', Userrouter);

const Articlerouter  = require('./article/article.router');
app.use('/article', Articlerouter);

const CategoryRouter = require('./category/category.router');
app.use('/category', CategoryRouter);

module.exports = app;
