var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var Promise = require('bluebird');
var mongoose = require("mongoose");
mongoose.Promise = Promise;

var path = require('path');

var port = 8080;

var routes = require('./routes/index');

// connection://url:port/dbName
var db = 'mongodb://localhost/meetingApp';

mongoose.connect(db);

// Set up view engine
var swig = require('swig');
app.engine('html',swig.renderFile);

//Locate and recognize a certain set of files within the project
//If we do not have a view engine = app.use(express.static(path.join(__dirname,'views')));
//Apply to any other engine
app.set('views',path.join(__dirname,"views"));
app.set('view engine','html');

//Tell express to look in public folder
app.use(express.static(path.join(__dirname,'public')));

//To use routes
app.use('/',routes);

//To understand json
app.use(bodyParser.json());

//To understand urlencoded elements
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(port,function () {
    console.log("App listening on port:" + port);
});