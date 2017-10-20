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
    School.findById(req.params.schoolId, function(err, school) {
      return res.render('reviews-new', {school: school});
    })
  })

  //EDIT
  app.get('/schools/:schoolId/edit', function (req, res) {
    School.findById(req.params.schoolId, req.body, function(err, review) {
      var review = new Review(req.body);

      review.edit(function(err){
        school.review.unshift(review);
        school.edit();

      return res.render('schools-edit', {review: review});
    })
    })
  })


//UPDATE
  app.put('/schools/:schoolId/reviews/:id', function (req, res) {
    console.log(req.body)
    School.findByIdAndUpdate(req.params.schoolId,  req.body, function(err, review) {
      res.redirect('/schools/' + req.params.schoolId);
    })
  })



  //DELETE
  app.delete('/schools/:schoolId/reviews/:id', function (req, res) {
    School.findByIdAndRemove(req.params.schoolId, function(err, review) {
      review.comments.pull({_id: req.params.review_id})
      review.save
      res.redirect('/');
    })
  })
};
