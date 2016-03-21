'use strict';
const Router = require('express').Router(),
      Config = require('../config');

Router.route('/data-resource')
  .get(function(request, response) {
    //GET for Read
    let head = {}, body = {};
    Config.mongodb.open(function(error, database) {
      // Query total number of pages
      database.collection('data_resource').count(function(error, result) {
        head.total = result; // Set protocal.head
        // Query data resource
        database.collection('data_resource').find({}, {_id: 0}).sort().skip(parseInt(request.query.skip - 1) * 12).limit(parseInt(request.query.limit)).toArray(function(error, documents) {
          body = documents; // Set protocal.body
          response.json(Config.protocal(head, body));
          database.close();
        });
      });
    });
  })
  .post(function(request, response) {
    //POST for Create
    let head = {}, body = {}; // for HTTP Response Protocal
    Config.mongodb.open(function(err, db) {
      db.collection('data_resource').insertOne(request.body.data, function(error, result){
        if(1 === result.result.ok){
          head.status = '200';
          head.message = 'Create operation sucessful!';
          response.json(Config.protocal(head, body));
        }
        db.close();
      });
    })
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
