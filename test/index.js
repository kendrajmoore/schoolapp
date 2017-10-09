var chai = require('chai')
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

describe('Site', function() {
  it('should have a live landing page', function (done) {
    chai.request('localhost:3000')
      .get('/')
      .end(function (err, res){
        res.status.should.be.equal(200);
        done();
      });
  });
});

describe('School', function() {
  //new
  it('should display the page', function (done) {
    chai.request('localhost:3000')
      .get('/schools/new')
      .end(function (err, res) {
        res.status.should.be.equal(200);
        done();
      });
  });
});

describe('School', function() {
  //update
  it('should delete the page', function (done) {
    chai.request('localhost:3000')
    .get('/schools/:id')
    .end(function (err, review){
      res.status.should.be.equal(200);
      done();
    });
  });
});
