const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const qnaSchema = new Schema({

    cus_id:{
        type: String,
        required: true
    },

    cus_name: {
        type: String,
        required: true
    },

    cus_contact_no: {
        type: String,
        required: true
    },

    question: {
        type: String,
        required: true
    },

    answer: {
        type: String,
        required: true
    }
})

const qna = mongoose.model("Q&A", qnaSchema);

module.exports = qna;