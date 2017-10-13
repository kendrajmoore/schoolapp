var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

    var ReviewSchema = new Schema({
      title             : { type: String, required: true }
      , description         : { type: String }
      // , rating score         : { type: String, required: true }
    
    });
