var express = require('express')
var app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// app.js
var exphbs  = require('express-handlebars');
// app.js

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/schoolapp');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./controllers/schools')(app);

app.listen(process.env.PORT || 3000, function () {
  console.log('Portfolio App listening on port 3000!')
})
