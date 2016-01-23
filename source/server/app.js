'use strict';

const Hapi  = require('hapi');

const server = new Hapi.Server();
const configuration = {
    port: 3000
};

server.connection(configuration);
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        return reply('Index page 2');
    }
});


server.start((err) => {
    if(err) {
        throw err;
    }
    console.log('Server running at ', server.info.uri);
});

