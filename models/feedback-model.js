const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    email:{
        type:String
    },
    feedbackId:{
        type: String,
    },
    agency:{
        type: String,
    },
    message:{
        type: String,
    }
})

const Feedback = mongoose.model("feedback", feedbackSchema);

module.exports = Feedback;

