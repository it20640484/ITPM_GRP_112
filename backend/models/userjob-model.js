const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jobSchema = new Schema({

    country:{
        type: String,
    },
    job:{
        type: String,
    },
    status:{
        type: String,
    }
})

const Job = mongoose.model("UserJob", jobSchema);

module.exports = Job;

