'use strict';

const ReadingList = require('./handlers/reading-list');
const ReadingItem = require('./handlers/reading-item');

exports.register = function (server, options, next) {

  server.route([
    {
      method: 'GET',
      path: '/reading/list',
      config: {
        description: 'return the list of things to read and learn',
        handler: ReadingList
      }
    },

    {
      method: 'GET',
      path: '/reading/{id}',
      config: {
        description: 'return a specific item to read and learn',
        handler: ReadingItem
      }
    }
 ]);

  return next();
};

exports.register.attributes = {
  name: 'Reading'
};
