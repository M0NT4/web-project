const mongoose = require('mongoose');
const config = require('./config');

// connect to mongo db
const mongoUri = config.mongo.HOST;
mongoose.connect(mongoUri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
});
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});
mongoose.connection.on('connected',()=> {
    console.log(`Connected to database: ${mongoUri} `);
});
