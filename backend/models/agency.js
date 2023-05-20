const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const agencySchema = new Schema({

  agency_id : {
    type : String,
    required: true
  },
  agency_name:{
    type: String,
    required: true

  },
  address:{
    type: String,
    required: true

  },
  contact:{
    type: Number,
    required: true

  },
  email:{
    type: String,
    required: true

  },
  fax:{
    type: Number,
    required: true

  },
  vaild_up_to: {
    type: String,
    required: true

  }

    

})

const Agency = mongoose.model("Agency",agencySchema);

module.exports = Agency;