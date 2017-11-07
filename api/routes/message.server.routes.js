'use strict'
module.exports = function(app) {
  var message = require('../controllers/message.server.controller'),
  userHandlers = require('../controllers/user.server.controller')

  // message routes
  app.route('/api/messages')
    .get(userHandlers.loginRequired, message.list_all_messages)
    .post(userHandlers.loginRequired, message.create_a_message);

  app.route('/api/messages/:messageId')
    .get(userHandlers.loginRequired, message.read_a_message)
    .put(userHandlers.loginRequired, message.update_a_message)
    .delete(userHandlers.loginRequired, message.delete_a_message);
};
