'use strict';
module.exports = function(app) {
  var userHandlers = require('../controllers/user.server.controller');

  app.route('/api/auth/register')
    .post(userHandlers.register);

  app.route('/api/auth/signIn')
    .post(userHandlers.signIn);
};
