const Joi = require('joi');

module.exports = {
  register (req,res,next){
   const schema = Joi.object().keys({
     email: Joi.string().email().required(),
     password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/)
   });
   
   const {error,value} = Joi.validate(req.body, schema);
   if( error){
    switch(error.details[0].context.key){
      case 'email':
        res.status(400).send({
          error: "Please enter a valid email address"
        })
        break;
      case 'password':
      res.status(400).send({
        error: `Your password failed to match the following rules:
          <br>
          1. It must contain ONLY the following characters: lower case, upper case,
          <br>
          2. It must be at least 6 characters in length and not greater than 30 characters in length.
        `
      })
        break;
      default:
        res.status(400).send({
          error: 'Invalid registration information'
        })
    }
   } else {
      next();
    }
  }
}