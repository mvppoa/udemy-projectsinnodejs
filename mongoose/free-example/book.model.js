var mongoose = require('mongoose');
var Schema = mongoose.Schema;

console.log('loading book');

var BookSchema = new Schema({
    title: String,
    author: String,
    cateogory: String
});

module.exports = mongoose.model('Book',BookSchema);

//var BookSchema = new Schema({
//    title: {
//        type: String,
//        required: true,
//        unique: true
//    },
//    date:{
//        type: Date,
//        default: Date.now
//    },
//    keywords: Array,
//    published: Boolean,
//    author:{
//        type: Schema.ObjectId, // Or Schema.type.ObjectId
//        ref:'User'
//    },
//    //Embedded sub-document
//    detail:{
//        modelNumber: Number,
//        hardcover: Boolean,
//        reviews: Number,
//        rank: Number
//    }
//});