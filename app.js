var express = require('express')
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// app.js
var exphbs  = require('express-handlebars');
// app.js

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/schoolapp');

// OUR MOCK ARRAY OF PROJECTS
var School =  mongoose.model('School', {
  name: String ,
  address: String ,
  grades:  String,
  activities: String,
  demographics: String,
  scores: String,
  stars: String
});

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// app.get('/get-school-data', function (req, res) {
//   request('https://data.sfgov.org/resource/mmsr-vumy.json', function (error, response, body) {
//     // loop over body, and save each object to your School collection
//     console.log(body);
//   })
// })

// SCHOOLS

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

//Update

app.put('/schools/:id', function (req, res) {
    console.log(req.body)
  Review.findByIdAndUpdate(req.params.id,  req.body, function(err, review) {
    res.redirect('/schools/' + review._id);
  })
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Portfolio App listening on port 3000!')
})
