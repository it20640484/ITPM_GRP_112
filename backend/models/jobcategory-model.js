const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({

    Id:{
        type: String,
    },
    Country:{
        type: String,
    },
    Categoryname:{
        type: String,
    }
})

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;

