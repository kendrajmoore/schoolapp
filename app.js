var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));

var exphbs  = require('express-handlebars');


var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/schoolapp');
var db = mongoose.connection;
var collection = db.collection('school-list');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./controllers/schools')(app);

app.listen(process.env.PORT || 3000, function () {
  console.log('Portfolio App listening on port 3000!')
})
