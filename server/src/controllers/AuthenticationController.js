const {user} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.athentication.jwtSecret,{
    expiresIn:ONE_WEEK
  });
}

module.exports = {

  async register (req, res) {
    try{ 
      const auser = await user.create(req.body);
      const userjson = auser.toJSON();
      res.status(200).send({
        user: userjson,
        token: jwtSignUser(userjson)
      });
    } catch(err){
      res.status(400).send({error:'This email has already registered'});
    }
  },

  async login (req, res) {
    try{
      const {email,password} = req.body;
      const auser = await user.findOne({
        where:{email: email}
      });
      //用户不存在
      if( !auser) {
        return res.status(403).send({error: `${email} is not associated with any account.`})
      }
      
      const isPasswordValid = await auser.comparePassword(password);
      if( !isPasswordValid ){
        return res.status(403).send({error: 'The password was incorrect.'})
      }
      
      const userjson = auser.toJSON();
      res.status(200).send({
        user: userjson,
        token: jwtSignUser(userjson)
      });
    } catch(err){
      res.status(400).send({error:'There is a error occured in login.'});
    }
  }
};