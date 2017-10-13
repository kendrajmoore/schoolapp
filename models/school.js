var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    Comment = require('./comment')

var SchoolSchema = new Schema({
  title             : { type: String, required: true }
  , address         : { type: String, required: true }
  , grades          : { type: String, required: true }
  , comments        : [{ type: Schema.Types.ObjectId, ref: 'Comment'} ]
});

// SchoolSchema.pre('save', function(next){
//   var now = new Date();
//   this.updatedAt = now;
//   if ( !this.createdAt ) {
//     this.createdAt = now;
//   }
//
//   next();
// });


module.exports = mongoose.model('School', SchoolSchema);
