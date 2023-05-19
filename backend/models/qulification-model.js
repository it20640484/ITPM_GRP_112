const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QualificationSchema = new Schema({

    jobcategory:{
        type: String,
    },
    jobNo:{
        type: String,
    },
    issuedate:{
        type: String,
    },
    expiredate:{
        type: String,
    },
    Period:{
        type: String,
    },
    Expirience:{
        type: String,
    },
    Salary:{
        type: String,
    },
    description:{
        type: String,
    },
})

const Qualification = mongoose.model("Qualification", QualificationSchema);

module.exports = Qualification;

