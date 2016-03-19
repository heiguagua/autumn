'use strict';
const Mongodb = require('mongodb'),
      JsonLoader = require('load-json-file');

const Config = {
  path: __dirname + '/mock/',
  mongodb: new Mongodb.Db('autumn', new Mongodb.Server('localhost', 27017), {safe: true}),
  json: function(name){
    return JsonLoader.sync(__dirname + '/mock/' + name);
  }
}

module.exports = Config;
