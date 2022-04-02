var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Course = new Schema({
  accountnumber: {
    type: String,
    default: '',
  },
  coursename: {
    type: String,
    default: '',
  },
  coursecode: {
    type: String,
    default: '',
  },
});
module.exports = mongoose.model('Course', Course);
