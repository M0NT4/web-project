const bcrypt = require('bcrypt');
const Joi = require('joi');
const User = require('../models/user.model');

const userSchema = Joi.object({
  //fullname: Joi.string().required(),
  username: Joi.string().required(),
  //email: Joi.string().email(),
  password: Joi.string().required(),
  repeatPassword: Joi.string().required().valid(Joi.ref('password'))
})




async function insert(user) {
  const { error, value } = userSchema.validate(user);
  user = value;
  user.roles=['admin'];
  user.hashedPassword = bcrypt.hashSync(user.password, 10);
  delete user.password;
  return await new User(user).save();
}

module.exports = {
  insert
}
