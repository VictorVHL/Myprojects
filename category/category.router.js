const express = require('express');
const router = express.Router();
const CategoryController = require('./category.controller');

router.post('/category', CategoryController.categoryregister);
router.get('/allcategory', CategoryController.allcategory);





module.exports = router;