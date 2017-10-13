var School = require('../models/school');
var Review = require('../models/review');


// module.exports = function(app) {
//   app.post('/school/:schoolId/', function (req, res) {
//     // INSTANTIATE INSTANCE OF MODEL
//     var review = new Review(req.body);
//
//     // SAVE INSTANCE OF POST MODEL TO DB
//     review.save(function (err, review)) {
//       // REDIRECT TO THE ROOT
//       return res.redirect(`/`);
//     })
//   })
//   });
//
//   app.get('/schools/:id', function (req, res) {
//     School.findById(req.params.id).populate('reviews').exec(function (err, school) {
//       res.render('schools-show', {school: school});
//     })
//   })
// }
