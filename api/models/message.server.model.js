'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  text: {
    type: String,
    required: 'Kindly enter the text'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Messages', MessageSchema);
