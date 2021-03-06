const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user,options) {
  const SALT_FACTOR = 8;
   if(!user.changed('password')){
     return ;
   }

   return bcrypt
    .genSaltAsync( SALT_FACTOR )
    .then( salt => bcrypt.hashAsync(user.password, salt, null))
    .then( hash => {
      user.setDataValue('password', hash);
    })
}

module.exports = (sequelize, DataType) => {
  const User = sequelize.define('user',{
    email: {
      type: DataType.STRING,
      unique: true
    },
    password: {
      type: DataType.STRING,
    }
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  });
  User.prototype.comparePassword = function (password){
    return bcrypt.compareAsync(password, this.password);
  }
  return User;
};
// store 'user' model definition in a single file, and then using 'import'