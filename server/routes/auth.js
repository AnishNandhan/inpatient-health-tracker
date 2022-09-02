const express = require('express');
//controller fucntions
const router = express.Router();

const { register, login, forgotPassword, resetPassword  } = require('../controllers/auth')

//register
router.route('/register').post(register);
//login
router.route('/login').post(login);
//forgot password 
router.route('/forgotpassword').post(forgotPassword);
//reset password
router.route('/resetpassword/:resetToken').put(resetPassword);


module.exports = router;

