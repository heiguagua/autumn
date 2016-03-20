'use strict';
const Router = require('express').Router(),
      Config = require('../config');

// mongoimport --db autumn --collection resource_catalog --file server/mock/resource-catalog/get.json
Router.route('/resource-catalog')
  .get(function(request, response) {
    Config.mongodb.open(function(err, db) {
      db.collection('resource_catalog').count(function(err, count) {
        var ResourceCatalog = db.collection('resource_catalog').find({}, {_id: 0}).skip(parseInt(request.query.offset - 1) * 10).limit(parseInt(request.query.limit));
        ResourceCatalog.toArray(function(err, doc) {
          var body = doc;
          var head = {};
          head.total = count;
          response.json(Config.protocal(head, body));
          db.close();
        });
      });
    });
  })
  .post(function(request, response) {
    Config.mongodb.open(function(err, db) {
      db.collection('resource_catalog').insertOne(request.query, function(error, result){
        if(1 === result.result.ok){
          response.json(Config.protocal());
        }
        db.close();
      });
    })
  })
  .put(function(req, res) {
    //PUT for Update
  })
  .delete(function(req, res) {
    //DELETE for Delete
  });

module.exports = Router;
