'use strict'
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

var mailSender = require('./index.js');

// app.get('/', function (req, res) {
//   // var email = req.body.email;
//   res.send('GET request to the homepage')
// })

mailSender();
console.log(process.env.CGP_1);
