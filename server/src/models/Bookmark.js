module.exports = (sequelize, DataType) => {
  const Bookmark = sequelize.define('Bookmark',{
  })
  Bookmark.associate = function(models){
    Bookmark.belongsTo(models.user)
    Bookmark.belongsTo(models.song)
  }
  return Bookmark;
};
// store 'user' model definition in a single file, and then using 'import'