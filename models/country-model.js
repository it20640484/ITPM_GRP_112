const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const countrySchema = new Schema({

    countryno:{
        type: String,
    },
    name:{
        type: String,
    },
    countryPicture: {
        imagePublicId: {
          type: String,
    
        },
        imageSecURL: {
          type: String,
    
        },
      },
})

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;

