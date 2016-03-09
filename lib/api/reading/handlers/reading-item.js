'use strict';

const readingItem = function(request, reply) {
  const list = require(__dirname + '/../../../data/things-to-read.json');
  const item = list.filter( item => {return parseInt(item.id) === parseInt(request.params.id) });
  return reply(item[0]);
}

module.exports = readingItem;
