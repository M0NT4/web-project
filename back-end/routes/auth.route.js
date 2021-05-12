const express = require('express');
const asyncHandler = require('express-async-handler');

const passport = require('passport');
const userCtrl = require('../controllers/user.controller');
const authCtrl = require('../controllers/auth.controller');
//const requireAdmin =require('../middlewares/require-admin');
const router = express.Router();

router.post('/register', asyncHandler(register), login);
router.post('/login', passport.authenticate('local', { session: false }), login);
router.get('/me', passport.authenticate('jwt', { session: false }), login);
//router.get('/admin*',passport.authenticate('jwt', { session: false }),requireAdmin, login);


async function register(req, res, next) {
  let user = await userCtrl.insert(req.body);
  user = user.toObject();
  delete user.hashedPassword;
  req.user = user;
  next()
}

function login(req, res) {
  let user = req.user;
  let token = authCtrl.generateToken(user);
  res.json({ user, token });
}


module.exports=router;
