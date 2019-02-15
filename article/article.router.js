const express = require('express');
const router = express.Router();
const articleController = require('./article.controller');

router.post('/article', articleController.article);




module.exports = router;