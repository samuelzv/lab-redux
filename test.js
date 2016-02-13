var app = require('./source/server/app.js');

var request = require('supertest').agent(app.listen());
var co = require('co');

describe('Simple User HTTP API Crud', function() {
  var user = {};

  beforeEach(function (done) {
    user = {name: "Marcus", age: 42, height:1.96}
    done();
  });

  it('Add new users', function(done) {
    request
      .post('/user')
      .send(user)
      .expect('location', /^\/user\/[0-9a-fA-F]{24}$/)
      .expect(200, done)
  });

  it("fails with validation errors for users without a name", function(done) {
    delete user.name;

    request
      .post('/user')
      .send(user)
      .expect('name required')
      .expect(400, done);
  });

  it('gets an existing user by id', function(done) {

    co(function* () {
      var insertedUser = yield app.users.insert(user);
      var url = "/user/" + insertedUser._id;

      // get via api
      request
        .get(url)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(/Marcus/)
        .expect(/1.96/)
        .expect(200, done);

      return done;

    }).then(function(value) {
      console.log('halsdjflaksdjfl');
    });


  });


});
