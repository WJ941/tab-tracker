module.exports = (sequelize, DataType) => {
  const Song = sequelize.define('song',{
    title: DataType.STRING,
    artist: DataType.STRING,
    genre: DataType.STRING,
    album: DataType.STRING,
    albumImageUrl: DataType.STRING,
    youtubeId: DataType.STRING,
    tab: DataType.TEXT,
    lyrics: DataType.TEXT,
  })
  return Song;
};
// store 'user' model definition in a single file, and then using 'import'