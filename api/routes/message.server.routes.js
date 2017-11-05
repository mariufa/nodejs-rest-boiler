'use strict'
module.exports = function(app) {
  var message = require('../controllers/message.server.controller');

  // message routes
  app.route('/api/messages')
    .get(message.list_all_messages)
    .post(message.create_a_message);

  app.route('/api/messages/:messageId')
    .get(message.read_a_message)
    .put(message.update_a_message)
    .delete(message.delete_a_message);
};
