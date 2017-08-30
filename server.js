'use strict'
let http = require('http');
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let cors = require('cors')
let mailSender = require('./mail.js');

app.use(bodyParser.json());
app.use(cors())
// app.use(express.static(__dirname + '/static'));

app.post('/', function (req, res) {
  var message = req.body.message;
  var sender = req.body.sender;
  mailSender('cica@gmail.com', 'szia brigi, cica vagyok');
  res.send('message sent');
});

let port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Example app listening on port 5000!')
});
