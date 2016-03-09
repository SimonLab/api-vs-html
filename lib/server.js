'use strict';

const Hapi = require('hapi');
//api
const Reading = require('./api/reading/reading');
const HomeAPI  = require('./plugins/home/home-api');
const HomeHTML = require('./plugins/home/home-html');
const Vision = require('vision');
const Handlebars = require('handlebars');

exports.init = function(port, next) {

  const server = new Hapi.Server();

  server.connection({
    port: port,
    labels: 'main'
  });

  const plugins = [Vision, Reading, HomeAPI, HomeHTML];

  server.register(plugins, function(err){

    server.views({
      engines: {
        html: Handlebars
      },
      relativeTo: __dirname + '/../views/',
      path: '.',
      layout: 'default',
      layoutPath: 'layout'
      // helpersPath: 'helpers',
      // partialsPath: 'partials'
    });

      server.start(function(err) {

        return next(err, server);
      });
  });
}
