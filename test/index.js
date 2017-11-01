const chai = require('chai')
const chaiHttp = require('chai-http');
const should = chai.should();

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
  it('should update the page', function (done) {
    chai.request('localhost:3000')
    .get('/schools/:id')
    .end(function (err, school){
      res.status.should.be.equal(200);
      done();
    });
  });
});
