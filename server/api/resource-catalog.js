'use strict';
const Express = require('express'),
      Router = Express.Router(),
      Config = require('../config'),
      JsonLoader = require('load-json-file');

// mongoimport --db autumn --collection resource_catalog --file server/mock/resource-catalog/get.json
Router.route('/resource-catalog')
  .get(function(req, res) {
    Config.mongodb.open(function(err, db) {
      var ResourceCatalog = db.collection('resource_catalog').find({}, {_id: 0});
      ResourceCatalog.each(function(err, doc) {
        if (doc != null) {
          res.json(doc);
        }
        db.close();
      })
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
