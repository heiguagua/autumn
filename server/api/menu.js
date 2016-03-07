'use strict';
const express = require('express');
const router = express.Router();
const jsonLoader = require('load-json-file'),
  path = __dirname + '/mock/';

router.route('/menu')
  .get(function(req, res) {
    let datas = jsonLoader.sync(path + 'menu.json');
    res.json(datas);
  })
  .post(function(req, res) {
    let datas = jsonLoader.sync(path + 'menu.json');
    res.json(datas);
  })
  .put(function(req, res) {
    let datas = jsonLoader.sync(path + 'menu.json');
    res.json(datas);
  })
  .delete(function(req, res) {
    let datas = jsonLoader.sync(path + 'menu.json');
    res.json(datas);
  });

module.exports = router;
