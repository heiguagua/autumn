'use strict';
const Express = require('express'),
      Router = Express.Router(),
      JsonLoader = require('load-json-file'),
      Config = require('../config');

Router.route('/data-resource')
  .get(function(req, res) {
    //GET for Read
    let datas = JsonLoader.sync(Config.path + 'data-resource/get.json');
    res.json(datas);
  })
  .post(function(req, res) {
    //POST for Create
    let datas = JsonLoader.sync(Config.path + 'data-resource/post.json');
    res.json(datas);
  })
  .put(function(req, res) {
    //PUT for Update
    let datas = JsonLoader.sync(Config.path + 'data-resource/put.json');
    res.json(datas);
  })
  .delete(function(req, res) {
    //DELETE for Delete
    let datas = JsonLoader.sync(Config.path + 'data-resource/delete.json');
    res.json(datas);
  });

module.exports = Router;
