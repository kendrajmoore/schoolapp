var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var Comment = require('./comment')
var Review = require('./review')

var SchoolSchema = new Schema({
  title             : { type: String, required: true }
  , address         : { type: String, required: true }
  , grades          : { type: String, required: true }
  , reviews        : [{ type: Schema.Types.ObjectId, ref: 'Review'} ]
  , comments        : [{ type: Schema.Types.ObjectId, ref: 'Comment'} ]
});



module.exports = mongoose.model('School', SchoolSchema);
