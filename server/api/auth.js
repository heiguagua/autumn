'use strict';
const Express = require('express'),
      Router = Express.Router(),
      JsonLoader = require('load-json-file'),
      Config = require('../config');

Router.route('/auth')
  .get(function(req, res) {
    //GET for Read
    let datas = JsonLoader.sync(Config.path + 'auth.json');
    res.json(datas);
  })

module.exports = Router;
