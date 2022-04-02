var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Batch = new Schema({
  accountnumber: {
    type: String,
    default: '',
  },
  batchname: {
    type: String,
    default: '',
  },
  batchcode: {
    type: String,
    default: '',
  },
  studentdetails: [
    {
      name: String,
      mis: String,
    },
  ],
});
module.exports = mongoose.model('Batch', Batch);
