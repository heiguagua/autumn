'use strict';
const Router = require('express').Router(),
      Config = require('../config');

Router.route('/dcm-config')
  .get(function(request, response) {
    //GET for Read
    let head = {}, body = {};
    Config.mongodb.open(function(error, database) {
      // Query total number of pages
      database.collection('dcm_config').count(function(error, result) {
        head.total = result; // Set protocal.head
        // Query data info
        database.collection('dcm_config').find({}, {_id: 0}).sort().skip(parseInt(request.query.skip - 1) * 12).limit(parseInt(request.query.limit)).toArray(function(error, documents) {
          body = documents; // Set protocal.body
          response.json(Config.protocal(head, body));
          database.close();
        });
      });
    });
  })
  .put(function(req, res) {
    //PUT for Update
  })

module.exports = Router;
