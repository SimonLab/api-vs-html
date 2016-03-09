'use strict';

const getList = require(__dirname + '/../../../helpers/get-list')

const readingList = function(request, reply) {
  const list = getList();
  return reply(list);
}

module.exports = readingList;
