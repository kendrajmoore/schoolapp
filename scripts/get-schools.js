var mongoose = require('mongoose'),
var request = require('request');
request('https://data.sfgov.org/resource/mmsr-vumy.json', function (error, response, body) {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // console.log(JSON.parse(body));
//
//   // connect to db
//   // use your model
//   // save new schools with attributes from JSON
//

  var body = JSON.parse(body);
  for (i = 0; i < body.length; i++) {
    console.log(body[i].name)
  }
});
