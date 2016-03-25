'use strict';
const Router = require('express').Router(),
      Config = require('../config');

// mongoimport --jsonArray --db autumn --collection resource_catalog --file server/mock/resource-catalog.json
Router.route('/resource-catalog')
  /* GET for Retrieve */
  .get(function(request, response) {
    let head = {}, body = {}; // for HTTP Response Protocal
    Config.mongodb.open(function(error, database) {
      // Map collection to ResourceCatalog
      let ResourceCatalog = database.collection('resource_catalog');
      // Query total number of pages
      ResourceCatalog.count(function(error, result) {
        head.total = result; // Set protocal.head
        // Query resource catalog
        ResourceCatalog.find({}, {_id: 0}).sort().skip(parseInt(request.query.skip - 1) * 12).limit(parseInt(request.query.limit)).toArray(function(error, documents) {
          body = documents; // Set protocal.body
          response.json(Config.protocal(head, body));
          database.close();
        });
      });
    });
  })
  /* POST for Create */
  .post(function(request, response) {
    let head = {}, body = {}; // for HTTP Response Protocal
    Config.mongodb.open(function(error, database) {
      database.collection('resource_catalog').insertOne(request.body.data, function(error, result){
        console.log(result);
        if(1 === result.result.ok){
          head.status = '200';
          head.message = '资源目录创建成功!';
          response.json(Config.protocal(head, body));
        }
        else{
          head.status = '500';
          head.message = '资源目录创建失败!';
          response.json(Config.protocal(head, body));
        }
        database.close();
      });
    })
  })

//Find resource catalog by ID
Router.route('/resource-catalog/:id')
  .get(function(request, response) {
    let head = {}, body = {}; // for HTTP Response Protocal
    Config.mongodb.open(function(error, database) {
      database.collection('resource_catalog').findOne({id: request.params.id}, function(error, document) {
        if (document) {
          response.json(Config.protocal(head, document));
        } else {
          head.status = '500';
          head.message = '资源目录查询失败！';
          response.json(Config.protocal(head, body));
        }
        database.close();
      })
    });
  })
  .put(function(request, response){
    let head = {}, body = {};
    Config.mongodb.open(function(error, database){
      database.collection('resource_catalog').updateOne({id: request.params.id}, request.body.data, function(error, result){
        console.log(result);
        database.close();
      })
    })
  })
  .delete(function(request, response) {

  });

module.exports = Router;
