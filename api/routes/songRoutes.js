'use strict';
module.exports = function(app) {
  var songList = require('../controllers/songController');

  // song Routes
  app.route('/songs')
    .get(songList.list_all_songs)
    .post(songList.create_a_song);


  app.route('/songs/:songId')
    .get(songList.read_a_song)
    .put(songList.update_a_song)
    .delete(songList.delete_a_song);
};
