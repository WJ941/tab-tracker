const {song} = require('../models')
const config = require('../config/config')

module.exports = {
  async index (req, res) {
    try{
      let songs = null
      const search = req.query.search
      if( search ){
         songs = await song.findAll({
          where: {
            $or: [
              'title', 'artist', 'genre', 'album'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              } 
            }))
          }
        });
      } else {
        songs = await song.findAll({
          limit: 10
        });
      }
      res.status(200).send(songs)
    } catch(err){
      res.status(500).send({error:'an error occured trying to fetch the songs'});
    }
  },
  async post (req, res) {
    try{
      const a_song = await song.create(req.body);
      res.status(200).send(a_song)
    } catch(err){
      res.status(500).send({error:'an error occured trying to create the song'});
    }
  },
  async show (req, res) {
    try{
      const a_song = await song.findById(req.params.songId);
      res.status(200).send(a_song)
    } catch(err){
      res.status(500).send({error:'an error occured trying to find the song'});
    }
  },
  async put (req, res) {
    try{
      const a_song = await song.update(req.body, {
        where: {
          id: req.params.songId
        }
      });
      res.status(200).send(a_song)
    } catch(err){
      res.status(500).send({error:'an error occured trying to update the song'});
    }
  }
};