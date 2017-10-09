'use strict'
module.exports = function(app) {
  var basic = require('../controllers/basic.server.controller');

  // basic routes
  app.route('/basics')
    .get(basic.list_all_basics)
    .post(basic.create_a_basic);

  app.route('/basics/:basicId')
    .get(basic.read_a_basic)
    .put(basic.update_a_basic)
    .delete(basic.delete_a_basic);
};
