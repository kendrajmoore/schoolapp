var express = require('express')
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// app.js
var exphbs  = require('express-handlebars');
// app.js

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/schoolapp');

// OUR MOCK ARRAY OF PROJECTS
var school =  mongoose.model('School', {
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

// INDEX
app.get('/', function (req, res) {
  school.find(function(err, school) {
  res.render('school-index', {schools: schools});
})
});


// NEW
app.get('/schools/new', function (req, res) {
  res.render('schools-new', {});
})

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })
//
// app.get('/', function (req, res) {
//   res.render('home', {msg: 'Hello World!'});
// })

app.listen(3000, function () {
  console.log('Portfolio App listening on port 3000!')
})
