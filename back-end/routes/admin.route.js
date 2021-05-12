const requireAdmin =require('../middlewares/require-admin');
const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/*',(req,res)=>{
    
    res.json({"success":"You are admin !"});
});


  

module.exports = router;