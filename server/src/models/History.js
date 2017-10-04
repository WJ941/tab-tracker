module.exports = (sequelize, DataType) => {
  const History = sequelize.define('History',{
  })
  History.associate = function(models){
    History.belongsTo(models.user)
    History.belongsTo(models.song)
  }
  return History;
};
// store 'user' model definition in a single file, and then using 'import'