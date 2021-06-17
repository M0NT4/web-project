const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/config');
const User = require('../models/user.model');
const Team = require('../models/team.model');


function register (req,res,next){
  const { username,fullname,email,password,repeatpassword,country,teamname,teampass,teamoption }=req.body;
  
  User.findOne({ username }).exec((err, user) => {
    if (user) {
      return res.status(401).json({
        error: "username is already taken",
      });
    }
  });
  User.findOne({ email }).exec((err, user) => {
    if (user) {
      return res.status(401).json({
        error: "Email is already taken",
      });
    }
  });
  if(teamoption==='Create New Team'){
        Team.findOne({ teamname }).exec((err, team) => {
          if (team) {
            return res.status(401).json({
              error: "team name is already taken",
            });
          }
        });
        const team= new Team({country,teamname,teampass});
        team.save((err,team)=>{
          if(err) {
            return res.status(401).json({
              error: "Erro while creating a new team !",
            });
          }
          const user = new User({ username,fullname,email,password});
          //user.roles=['admin'];
          user.hashedPassword = bcrypt.hashSync(req.body.password, 10);
          delete user.password;
          user.team_id=team._id;
          console.log(user);
          user.save((err, user) => {
            if (err) {
              console.log("SAVE USER ERROR", err);
              return res.status(401).json({
                error: "Error saving user in database. Try signup again",
              });
            }
            req.user = user;
            next();
          });
        });
  } else if(teamoption==='I already have a team') {
    Team.findOne({ teamname }).exec((err, team) => {
      if (err||!team) {
        return res.status(401).json({
          error: "teamname doesn't exist",
        });
      }else {
        if (team.teampass===teampass){
          const user = new User({ username,fullname,email,password});
         // user.roles=['admin'];
          user.hashedPassword = bcrypt.hashSync(req.body.password, 10);
          delete user.password;
          user.team_id=team._id;
          console.log(user);
          user.save((err, user) => {
            if (err) {
              console.log("SAVE USER ERROR", err);
              return res.status(401).json({
                error: "Error saving user in database. Try signup again",
              });
            }
            req.user = user;
            next();
          });
        }else {
          return res.status(401).json({
            error: "Team password is incorrect !",
          });
        }
      }
      
    });

  }
  
   
    
}

function generateToken(user) {
  const payload = JSON.stringify(user);
  return jwt.sign(payload, config.SECRET);
}

function login(req, res) {
  let user = req.user;
  delete user.hashedPassword;
  let token = generateToken(user);
  res.json({ user, token });
}

module.exports = {
  register,
  login
}
