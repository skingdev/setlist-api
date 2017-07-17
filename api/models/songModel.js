'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SongSchema = new Schema({
  name: {
    type: String,
    Required: 'Please enter the name of the song'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  key: {
    type: String
  },
  started_by: {
    type: String
  }
});

module.exports = mongoose.model('Songs', SongSchema);
