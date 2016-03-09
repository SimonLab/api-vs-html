'use strict';

const getList = function() {
  const list = require(__dirname + '/../data/things-to-read.json');
  return list;
}

module.exports = getList;
