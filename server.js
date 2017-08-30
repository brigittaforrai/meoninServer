'use strict'
let http = require('http');
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let cors = require('cors')
let mailSender = require('./mail.js');

app.use(bodyParser.json());
app.use(cors())

app.post('/', function (req, res) {
  console.log(req.body, 'req');
  var message = req.body.message;
  var sender = req.body.sender;
  mailSender(sender, message);
  res.send('message sent');
});

app.get('/', function (req, res) {
  res.send('ok');
});

let port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Example app listening on port 5000!')
});
