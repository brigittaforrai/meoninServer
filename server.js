'use strict'
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var mailSender = require('./index.js');

app.get('https://hidden-earth-71841.herokuapp.com/', function (req, res) {
  // var email = req.body.email;
  mailSender();
  res.send('message sent')
})


let port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
