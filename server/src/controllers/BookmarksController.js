const {
  Bookmark,
  song
} = require('../models')
const _ = require('lodash')
const config = require('../config/config')

module.exports = {
  async index (req, res) {
    try{
      const {songid, userid} = req.query;
      const where = {
        userId: userid
      }
      if (songid) {
        where.songId = songid
      }
      const bookmarks = (await Bookmark.findAll({
        where: where,
        include: [
          {
            model: song
          }
        ]
      })).map( bookmark => bookmark.toJSON())
        .map( bookmark => _.extend({}, bookmark.song, bookmark))
      res.status(200).send(bookmarks)
    } catch(err){
      res.status(500).send({error:'can not find the bookmark'});
    }
  },
  async post (req, res) {
    try{
      const {songid, userid} = req.body;
      const bookmark = await Bookmark.findOne({
        where: {
          songId: songid,
          userId: userid
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'you already have set the bookmark'
        })
      }
      const newBookmark = await Bookmark.create({
        songId: songid,
        userId: userid
      })
      res.status(200).send(newBookmark)
    } catch(err){
      res.status(500).send({error:'can not create the bookmark'});
    }
  },
  async delete (req, res) {
    try{
      const bookmark = await Bookmark.findById(req.params.bookmarkid)
      await bookmark.destroy()
      res.status(200).send(bookmark)
    } catch(err){
      res.status(500).send({error:'faild to delete  the bookmark'});
    }
  }
};