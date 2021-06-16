const express = require('express');
const authRoutes = require('./auth.route');
const adminRoutes= require('./admin.route');
const userRoutes=require('./user.route');
const router = express.Router();
const passport = require('passport');
const requireAdmin =require('../middlewares/require-admin');

router.get('/', (req, res) =>
  res.send('OK')
);
router.use('/auth', authRoutes);
router.use('/user',passport.authenticate('jwt', { session: false }),userRoutes)
router.use('/admin',passport.authenticate('jwt', { session: false }),requireAdmin,adminRoutes);


module.exports = router;