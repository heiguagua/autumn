'use strict';
const express = require('express');
const router = express.Router();
const jsonLoader = require('load-json-file'),
  jsonPath = __dirname + '/mock/';

router.route('/test')
  .all(function(req, res) {
    res.cookie('username', 'wiserv');
    res.json('{username:"admin",password:"admin"}');
  })

module.exports = router;
