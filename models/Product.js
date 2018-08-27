var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: String,
    price: String,
    description: String,
    ingredients: String

}, {
        timestamps: true
    });

    module.exports = mongoose.model('Product', productSchema);