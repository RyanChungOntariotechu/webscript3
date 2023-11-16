let mongoose = require('mongoose');
//create a foodtracker model
let foodtracker = mongoose.Schema({
    name:String,
    description: String,
    Calories: Number,
    cost: Number
    },
    {
        collection: "food"
    }
);

module.exports = mongoose.model('food',foodtracker);
