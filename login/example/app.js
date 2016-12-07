var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var controller = require('./controllers/user.controller');

var port = 8080;

// Connection://url:dbName
var db = 'mongodb://localhost:userExample';

mongoose.connect(db);

//Locate and recognize a certain set of files within the project
app.use(express.static(path.join(__dirname,'views')));

//To understand json
app.use(bodyParser.json());

//To understand urlencoded elements
app.use(bodyParser.urlencoded({
    extended: true
}));

//ROUTES
app.get('/',function (req, res) {
    res.render('index.html');
});

app.post('/', controller.register);

app.listen(port,function () {
    console.log("App listening on port:" + port);
});