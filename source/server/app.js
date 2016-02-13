var koa = require('koa');
var serve = require('koa-static');

var app = module.exports = koa();

var routes = require('koa-route');
var parse = require('co-body');
var monk = require('monk');
var wrap = require('co-monk');
var db = monk('localhost/apiUsers');
var users = wrap(db.get('users'));


app.use(serve(__dirname + '/../build'));
app.listen(8008);
console.log('Koa listening on port 8008');

app.use(routes.post('/user', addUser));
app.use(routes.get('/user:id', getUser));


function *getUser(id) {
  var user = users.findById(id);

  this.body = user;
  this.status = 200;
}

function *addUser() {
  var userFromRequest = yield parse(this);

  if(!userFromRequest.name) {
    this.throw(400, "name required");
  }

  var insertdUser  = yield users.insert(userFromRequest);

  this.set('location', '/user/' + insertdUser._id);
  this.status = 200;
}


