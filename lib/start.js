'use strict';

require('env2')('.env');
const Server = require('./server');
const Hoek = require('hoek');

Server.init(process.env.PORT, function (err, server) {
  Hoek.assert(!err, err);
  server.connections.forEach( connection => {console.log('The server is running on: ', connection.info.uri)})
});
