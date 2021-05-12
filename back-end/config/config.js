const crypto =require("crypto");
require('dotenv').config();


const config = {
    env : process.env.NODE_ENV,
    SECRET :crypto.randomBytes(22).toString('hex'),
    PORT : process.env.SERVER_PORT || 8080,
    mongo:{
        HOST:process.env.MONGO_HOST
    }
}



module.exports = config;