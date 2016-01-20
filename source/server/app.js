'use strict';

const Hapi  = require('hapi');

const server = new Hapi.Server();
const configuration = {
    host: 'localhost',
    port: 3000
};

server.connection(configuration);
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        return reply('Index page');
    }
});


server.start((err) => {
    if(err) {
        throw error;
    }
    console.log('Server running at ', server.info.uri);
});

