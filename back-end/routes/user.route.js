const express = require('express');


const router = express.Router();

router.get('/scoreboard',(req,res)=>{
    return res.status("200");
});

module.exports = router;