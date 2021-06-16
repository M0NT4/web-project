const express = require('express');
const asyncHandler = require('express-async-handler');
const runValidation = require('../validators/index');
const passport = require('passport');
//const userCtrl = require('../controllers/user.controller');
const {register,login} = require('../controllers/auth.controller');
const {userSignupValidator,userLoginValidator} = require('../validators/auth');

const router = express.Router();

router.post('/register',userSignupValidator,register,login);
router.post('/login',userLoginValidator,passport.authenticate('local', { session: false }), login);
router.get('/me', passport.authenticate('jwt', { session: false }), login);



module.exports=router;
