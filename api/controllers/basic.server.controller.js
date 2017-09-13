'use strict'

var mongoose = require('mongoose'),
  Basic = mongoose.model('Basics')

exports.list_all_basics = function(req, res) {
  Basic.find({}, function(err, basics) {
    if (err) {
      res.send(err);
    }
    res.json(basics)
  });
}

exports.create_a_basic = function(req, res) {
  var new_basic = new Basic(req.body);
  new_basic.save(function(err, basic) {
    if (err) {
      res.send(err);
    }
    res.json(basic)
  });
};

exports.read_a_basic = function(req, res) {
  Basic.findById(req.params.basicId, function(err, basic) {
    if (err) {
      res.send(err);
    }
    res.json(basic)
  });
};

exports.update_a_basic = function(req, res) {
  Basic.findOneAndUpdate({_id: req.params.basicId}, req.body, {new: true}, function(err, basic) {
    if (err) {
      res.send(err);
    }
    res.json(basic);
  });
};

exports.delete_a_basic = function(req, res) {
  Basic.remove({_id: req.params.basicId}, function(err, basic) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Basic successfully deleted' });
  });
};
