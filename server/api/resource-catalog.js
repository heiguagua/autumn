'use strict';
const Express = require('express'),
      Router = Express.Router(),
      JsonLoader = require('load-json-file'),
      Config = require('../config');

Router.route('/resource-catalog')
  .get(function(req, res) {
    //GET for Read
    let datas = JsonLoader.sync(Config.path + 'resource-catalog/get.json');
    res.json(datas);
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
