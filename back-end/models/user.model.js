const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,  
  },
  fullname: {
    type: String,
    required: true,  
  },
  email: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true
  },
  roles: [{
    type: String,
  }],
  team_id:{
    type: String,
    required : true
  }
},
 {
  versionKey: false,
  timestamps:true
});


module.exports = mongoose.model('User', UserSchema);
