module.exports = (sequelize, DataType) => {
  return sequelize.define('user',{
    email: {
      type: DataType.STRING,
      unique: true
    },
    password: {
      type: DataType.STRING,
    }
  });
};
// store 'user' model definition in a single file, and then using 'import'