const {
  History,
  song
} = require('../models')
const _ = require('lodash')
const config = require('../config/config')

module.exports = {
  async index (req, res) {
    try{
      const {userid} = req.query;
      const where = {
        userId: userid
      }
      const songHistories = (await History.findAll({
        where: where,
        include: [
          {
            model: song
          }
        ]
      })).map( history => history.toJSON())
        .map( history => _.extend({}, history.song, history))
      res.status(200).send(songHistories)
    } catch(err){
      res.status(500).send({error:'can not find the song history'});
    }
  },
  async post (req, res) {
    try{
      const {songid, userid} = req.body;
      const songHistory = await History.findOne({
        where: {
          songId: songid,
          userId: userid
        }
      })
      if (songHistory) {
        return res.status(400).send({
          error: 'you already have set the song history'
        })
      }
      const newSongHistory = await History.create({
        songId: songid,
        userId: userid
      })
      res.status(200).send(newSongHistory)
    } catch(err){
      res.status(500).send({error:'can not create the bookmark'});
    }
  }
};