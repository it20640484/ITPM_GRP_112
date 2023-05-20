const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const advertisementSchema = new Schema({
    job_category: {
        type: String,
        required: true
    },

    ag_name: {
        type: String,
        required: true
    },

    mngr_id: {
        type: String,
        required: true
    },

    mngr_name: {
        type: String,
        required: true
    },

    contact_no:{
        type: String,
        required: true
    },

    mgr_email: {
        type: String,
        required: true
    },

    from: {
        type: Date,
        required: true
    },

    to: {
        type: Date,
        required: true
    }
})

const advertisement = mongoose.model("Advertisement", advertisementSchema);

module.exports = advertisement;