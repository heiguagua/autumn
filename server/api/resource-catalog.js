'use strict';
const Router = require('express').Router(),
      Config = require('../config');

// mongoimport --jsonArray --db autumn --collection resource_catalog --file server/mock/resource-catalog.json
Router.route('/resource-catalog')
  /* GET for Retrieve */
  .get(function(request, response) {
    let head = {}, body = {}; // for HTTP Response Protocal
    Config.mongodb.open(function(error, database) {
      // Map collection to ResourceCatalog
      let ResourceCatalog = database.collection('resource_catalog');
      // Query total number of pages
      ResourceCatalog.count(function(error, result) {
        head.total = result; // Set protocal.head
        // Query resource catalog
        ResourceCatalog.find({}, {_id: 0}).sort().skip(parseInt(request.query.skip - 1) * 12).limit(parseInt(request.query.limit)).toArray(function(error, documents) {
          body = documents; // Set protocal.body
          response.json(Config.protocal(head, body));
          database.close();
        });
      });
    });
  })
  /* POST for Create */
  .post(function(request, response) {
    let head = {}, body = {}; // for HTTP Response Protocal
    Config.mongodb.open(function(err, db) {
      db.collection('resource_catalog').insertOne(request.body.data, function(error, result){
        if(1 === result.result.ok){
          head.status = '200';
          head.message = 'Create operation sucessful!';
          response.json(Config.protocal(head, body));
        }
        db.close();
      });
    })
  })
  /* PUT for Update */
  .put(function(request, response) {

  })
  /* DELETE for Delete */
  .delete(function(request, response) {

  });

module.exports = Router;
