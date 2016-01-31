var koa = require('koa');
var serve = require('koa-static');

var app = koa();

app.use(serve(__dirname + '/../build'));
app.listen(8008);

console.log('Koa listening on port 8008');

