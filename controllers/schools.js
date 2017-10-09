var School = require('../models/school.js');

module.exports = function(app) {

// INDEX
app.get('/', function (req, res) {
  School.find(function(err, schools) {
    res.render('schools-index', {schools: schools});
  });
});


// NEW
app.get('/schools/new', function (req, res) {
  res.render('schools-new', {});
})

app.post('/schools', function (req, res) {
  School.create(req.body, function(err, school) {
    res.redirect('/schools/' + school._id);
  })
})

app.get('/schools/:id', function (req, res) {
  School.findById(req.params.id).exec(function (err, school) {
    res.render('schools-show', {school: school});
  })
})

//Update

app.put('/schools/:id', function (req, res) {
    console.log(req.body)
  School.findByIdAndUpdate(req.params.id,  req.body, function(err, school) {
    res.redirect('/schools/' + school._id);
  })
})

app.get('/schools/:id/edit', function (req, res) {
    School.findById(req.params.id, function(err, school) {
      res.render('schools-edit', {school: school});
    })
  })

  app.delete('/schools/:id', function (req, res) {
    School.findByIdAndRemove(req.params.id, function(err) {
      res.redirect('/');
    })
  })
};
