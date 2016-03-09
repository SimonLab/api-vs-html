exports.register = function (server, options, next) {

  server.route({
    method: 'GET',
    path: '/',
    config: {
      description: 'return home page',
      handler: function (request, reply) {

        /*
        The home page use the api to get some data and then return a html page created with handlebars
        */
        server.inject('/reading/list', function(response) {
          const data = JSON.parse(response.payload);
          // const data = require(__dirname + '/../../data/things-to-read.json');
          // console.log(data);
          return reply.view('home', {items: data});
        });
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'Home'
};
