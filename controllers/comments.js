var School = require('../models/school');
var Comment = require('../models/comment');



module.exports = function(app) {
//POST COMMENT
  app.post('/schools/:id', function (req, res) {
    // FIND THE PARENT SCHOOL
    School.findById(req.params.id).exec(function (err, school) {
      var comment = new Comment(req.body);

      comment.save(function(err) {
        // UNSHIFT A NEW COMMENT
        school.comments.unshift(comment);
        // SAVE THE PARENT
        school.save();

        // REDIRECT BACK TO THE PARENT POST#SHOW PAGE TO SEE OUR NEW COMMENT IS CREATE
        return res.redirect(`/schools/` + school._id);
      })
    })
  })


//EDIT COMMENT
  app.get('/schools/:id/edit', function (req, res) {
    School.findById(req.params.id, function(err, school) {
      var comment = new Comment(req.body);

      comment.edit(function(err){
        school.comments.unshift(comment);
        school.edit();

      return res.render('schools-edit', {school: school});
    })
    })
  })
//Update
  app.put('/schools/:schoolId/comments/id', function (req, res) {
    console.log(req.body)
    School.findByIdAndUpdate(req.params.id,  req.body, function(err, school) {
      res.redirect('/schools/' + school._id);
    })
  })

  //DELETE COMMENT
  app.delete('/schools/:id/comments', function (req, res) {
    School.findByIdAndRemove(req.params.id, function(err) {
      res.redirect('/');
    })
  })

};
