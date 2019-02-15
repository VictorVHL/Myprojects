const express = require('express');
const router = express.Router();
const Usercontroler = require('./user.controler');

router.post('/register', Usercontroler.register);
router.post('/login', Usercontroler.login);
router.get('/allusers', Usercontroler.allUsers);



module.exports = router;