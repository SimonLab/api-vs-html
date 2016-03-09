const getList = require(__dirname  + '/../../helpers/get-list');

exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/html',
    config: {
      description: 'return home page',
      handler: function (request, reply) {

        // const data = require(__dirname + '/../../data/things-to-read.json');
        // console.log(data);
        const data = getList();
        return reply.view('home', {items: data});
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'HomeHtml'
};
