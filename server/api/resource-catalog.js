'use strict';
const Router = require('express').Router(),
      Config = require('../config');

// mongoimport --db autumn --collection resource_catalog --file server/mock/resource-catalog/get.json
Router.route('/resource-catalog')
  .get(function(req, res) {
    Config.mongodb.open(function(err, db) {
      db.collection('resource_catalog').count(function(err, count) {
        var ResourceCatalog = db.collection('resource_catalog').find({}, {_id: 0}).skip(parseInt(req.query.offset - 1) * 10).limit(parseInt(req.query.limit));
        ResourceCatalog.toArray(function(err, doc) {
          res.json(Config.head(count, doc));
          db.close();
        });
      });
    });
  })
  .post(function(req, res) {
    //POST for Create
  })
  .put(function(req, res) {
    //PUT for Update
  })
  .delete(function(req, res) {
    //DELETE for Delete
  });

module.exports = Router;
