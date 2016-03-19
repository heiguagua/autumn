'use strict';
const Mongodb = require('mongodb'),
      JsonLoader = require('load-json-file');

const Config = {
  path: __dirname + '/mock/',
  mongodb: new Mongodb.Db('autumn', new Mongodb.Server('localhost', 27017), {safe: true}),
  json: function(name){
    return JsonLoader.sync(__dirname + '/mock/' + name);
  },
  head: function(body){
    return {
      "head": {
        "status": 200,
        "token": "bb4fba181e6d83d8c5a1b56055c08b5aa2da5755",
        "message": "Mongodb Operation Sucess!"
      },
      "body": body
    }
  }
}

module.exports = Config;
