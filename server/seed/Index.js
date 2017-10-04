const {
  sequelize,
  song,
  user,
  Bookmark,
  History
} = require('../src/models')

const Promise = require('bluebird')
const songs = require('./songs.json')
const users = require('./users.json')
const bookmarks = require('./bookmarks.json')
const histories = require('./histories.json')

sequelize.sync({force:true})
.then(async function() {
  await Promise.all(
    users.map( x => {
      user.create( x )
    })
  )
  await Promise.all(
    songs.map( x => {
      song.create( x )
    })
  )
  await Promise.all(
    bookmarks.map( x => {
      Bookmark.create( x )
    })
  )
  await Promise.all(
    histories.map( x => {
      History.create( x )
    })
  )
});