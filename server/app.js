/**
 * Created by m3rkz0r on 9/26/15.
 */
var express = require('express');
var path = require('path');
var app = express();
var jsonData = require('../models/data');


app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, './public/views/index.html'));
});

app.get('/getData', function(req,res){
    res.send(jsonData);
});

var server = app.listen(process.env.PORT || 3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

