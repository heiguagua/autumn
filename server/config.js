'use strict';
const Mongodb = require('mongodb'),
      JsonLoader = require('load-json-file');

const Config = {
  path: __dirname + '/mock/',
  mongodb: new Mongodb.Db('autumn', new Mongodb.Server('localhost', 27017), {safe: true}),
  json: function(name){
    return JsonLoader.sync(__dirname + '/mock/' + name);
  },
  protocal: function(head, body){
    return {
      "head": {
        "status": head.status || '',
        "token": head.token || 'bb4fba181e6d83d8c5a1b56055c08b5aa2da5755',
        "message": head.message || 'Mongodb Operation Sucess!',
        "total": head.total || ''
      },
      "body": body || ''
    }
  }
}

module.exports = Config;
