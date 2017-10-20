var School = require('../models/school');
var Review = require('../models/review');


module.exports = function(app) {
//CREATE ReVIEW
  app.post('/schools/:SchoolId/reviews', function (req, res) {
    // FIND THE PARENT SCHOOL
    School.findById(req.params.id).exec(function (err, school) {
      var review = new Review(req.body);

      review.save(function(err) {
        // UNSHIFT A NEW COMMENT
        school.reviews.unshift(review);
        // SAVE THE PARENT
        school.save();

        // REDIRECT BACK TO THE PARENT POST#SHOW PAGE TO SEE OUR NEW COMMENT IS CREATE
        return res.redirect(`/schools/` + school._id);
      })
    })
  })

  // NEW
  app.get('/schools/:schoolId/reviews/new', function (req, res) {
    res.render('./partials/reviews-new', {});
  })

  //EDIT
  app.get('/schools/:schoolId/edit', function (req, res) {
    School.findById(req.params.id, function(err, school) {
      var review = new Review(req.body);

      review.edit(function(err){
        school.review.unshift(review);
        school.edit();

      return res.render('schools-edit', {school: school});
    })
    })
  })

// //EDIT
//   app.get('/schools/:schoolId/reviews/:id', function (req, res) {
//     // find and update the review
//     // redirect to the reviews#show '/schools/:schoolId/reviews/:id'
//
//     School.findByIdAndUpdate(req.params.id,  req.body, function(err, review) {
//       res.redirect('/schools/' + req.params.schoolId + '/reviews/' + review._id);
//     })
//   })
//UPDATE
  app.put('/schools/:schoolId/reviews/:id', function (req, res) {
    console.log(req.body)
    School.findByIdAndUpdate(req.params.id,  req.body, function(err, review) {
      res.redirect('/schools/' + req.params.schoolId);
    })
  })

  // EDIT

  app.get('/schools/:schoolId/edit', function (req, res) {
    School.findById(req.params.id, req.body, function(err, review) {
      res.render('schools-edit', {review: review});
    })
  })
  //DELETE
  app.delete('/schools/:schoolId/reviews/:id', function (req, res) {
    // find the school
    // find the review
    // remove the review from the school.reviews attribute
    // delete the review
    // redirect to '/'
    School.findByIdAndRemove(req.params.id, function(err, review) {
      review.comments.pull({_id: req.params.review_id})
      review.save
      res.redirect('/');
    })
  })

};
