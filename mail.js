'use strict';
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const pwd = process.env.CGP_1;
const user = process.env.CGU_1;

let emailSender = function() {
  console.log('email');
  let options = {
    auth: {
      api_user: 'user',
      api_key: 'pwd'
    }
  };

  let client = nodemailer.createTransport(sgTransport(options));

  var email = {
    from: 'zsolt.bako@gmail.com',
    to: 'forraibrigi@gmail.com',
    subject: 'sendgrid test',
    // text: 'lefut',
    html: '<b>lefut</b>'
  };

  client.sendMail(email, function(err, info){
      if (err ){
        console.log(err);
      }
      else {
        console.log('mail');
        console.log(info);
      }
  });
};

module.exports = emailSender;
