'use strict';
const Router = require('express').Router(),
  Config = require('../config');

// mongoimport --jsonArray --db autumn --collection resource_catalog --file server/mock/resource-catalog.json
Router.route('/login-user')
  /* GET for Retrieve */
  .get(function(request, response) {
    let head = {},
      body = {}; // for HTTP Response Protocal
  })
  /* POST for Create */
  .post(function(request, response) {

  })
  /* PUT for Update */
  .put(function(request, response) {
    let head = {},
      body = {}; // for HTTP Response Protocal
    head.status = '200';
    head.message = '修改成功!';
    response.json(Config.protocal(head, body));
  })
  /* DELETE for Delete */
  .delete(function(request, response) {

  });

  Router.route('/login-user/:id')
    /* GET for Retrieve */
    .get(function(request, response) {
      let head = {},
        body = {}; // for HTTP Response Protocal
    })
    /* POST for Create */
    .post(function(request, response) {

    })
    /* PUT for Update */
    .put(function(request, response) {
      let head = {},
        body = {}; // for HTTP Response Protocal
      head.status = '200';
      head.message = '修改成功!';
      response.json(Config.protocal(head, body));
    })
    /* DELETE for Delete */
    .delete(function(request, response) {

    });

module.exports = Router;
