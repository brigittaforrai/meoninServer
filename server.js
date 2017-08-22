'use strict'
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var mailSender = require('./mail.js');

app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
  // var email = req.body.email;
  console.log('get');
  mailSender();
  res.send('message sent')
})

mailSender();

let port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Example app listening on port 5000!')
})
