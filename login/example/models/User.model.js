var Promise = require('bluebird');
var mongoose = require("mongoose");

//Needs to intialize
var mongooseHidden = require('mongoose-hidden')();

mongoose.Promise = Promise;

var Schema = mongoose.Schema;

var minLength = [3,"The value of path `{PATH}`(`{VALUE}`) is shorter than the minimun allowed length(3)"];

var UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            minlength: minLength,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            hide: true
        }
    }
);

UserSchema.plugin(mongooseHidden);
//Needs to make sure what's the model that will be referenced when using plugins

module.exports = mongoose.model('User',UserSchema,'users');