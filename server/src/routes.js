const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const SongsController = require('./controllers/SongsController');
const BookmarksController = require('./controllers/BookmarksController');
const SongHistoryController = require('./controllers/SongHistoryController');

module.exports = (app) => {
  app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register);

  app.post('/login',
    AuthenticationController.login);

  app.get('/songs',
    SongsController.index);

  app.post('/songs',
    SongsController.post);

  app.get('/songs/:songId',
    SongsController.show);

  app.put('/songs/:songId',
    SongsController.put);

  app.get('/bookmarks',
    BookmarksController.index);

  app.post('/bookmarks',
    BookmarksController.post);

  app.delete('/bookmarks/:bookmarkid',
    BookmarksController.delete);

  app.get('/history',
    SongHistoryController.index);

  app.post('/history',
  SongHistoryController.post);
};