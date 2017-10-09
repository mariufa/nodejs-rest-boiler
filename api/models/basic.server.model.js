'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BasicSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Basics', BasicSchema);
