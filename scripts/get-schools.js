var request = require('request');

// connect to db
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/schoolapp');

// use your model
var School = require('../models/school.js');


request('https://data.sfgov.org/resource/mmsr-vumy.json', function (error, response, body) {
  // GET THE SCHOOLS FROM API
  var body = JSON.parse(body);
  // console.log(body)
  for (i = 0; i < body.length; i++) {
    // SAVE NEW SCHOOL
    var school = {
      title: body[i].campus_name,
      address: body[i].campus_address,
      grades: body[i].grade_range
    }
    // console.log(school)
    School.create(school, function(err, school) {
      console.log(err);
      console.log(school);
    });

    // console.log(body)
  }

});
