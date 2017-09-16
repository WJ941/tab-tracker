const {user} = require('../models');
module.exports = {
  async register (req, res) {
    try{ 
      const auser = await user.create(req.body);
      res.status(200).send(auser.toJSON());
    } catch(err){
      res.status(400).send({error:'This email has already registered'});
    }
  }
};