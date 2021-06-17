require('dotenv').config();


const config = {
    env : process.env.NODE_ENV,
    SECRET :process.env.SECRET,
    PORT : process.env.SERVER_PORT || 8080,
    mongo:{
        HOST:process.env.MONGO_HOST
    }
}



module.exports = config;