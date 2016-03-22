'use strict';
const Router = require('express').Router(),
  Config = require('../config');

Router.route('/alarm-rule')
  .get(function(request, response) {
    //GET for Read
    let head = {},
      body = {};
    Config.mongodb.open(function(error, database) {
      // Query total number of pages
      database.collection('alarm_rule').count(function(error, result) {
        head.total = result; // Set protocal.head
        // Query data info
        database.collection('alarm_rule').find({}, {
          _id: 0
        }).sort().skip(parseInt(request.query.skip - 1) * 12).limit(parseInt(request.query.limit)).toArray(function(error, documents) {
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
