const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    
    res.json({"success":"You are admin !"});
});


  

module.exports = router;