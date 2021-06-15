var mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");

var Schema = mongoose.Schema;

const teamSchema=new Schema({
    
    team_name : {
        type : String,
        required : true,
        unique :true
    },
    hashedPassword : {
        type : String,
        required :true
    }, 
    country :{
        type : String,
        required : true,
    },
    score : {
        type: Number,
        default : 0
    },
    membres :[
        {
            type:String
        }
    ]
});

autoIncrement.initialize(mongoose.connection);
teamSchema.plugin(autoIncrement.plugin, {
    model: "team", // collection or table name in which you want to apply auto increment
    field: "_id", // field of model which you want to auto increment
    startAt: 1, // start your auto increment value from 1
    incrementBy: 1, // incremented by 1
});

module.exports = mongoose.model("team", teamschema);
