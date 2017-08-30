'use strict';
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const pwd = process.env.CGP_1;
const user = process.env.CGU_1;

let emailSender = function(from,  message) {
  let options = {
    auth: {
      api_user: user,
      api_key: pwd
    }
  };
  let client = nodemailer.createTransport(sgTransport(options));

  var email = {
    from: from,
    to: 'forraibrigi@gmail.com',
    subject: 'message from meonin website',
    text: message,
    // html: '<b>lefut</b>'
  };

  client.sendMail(email, (err, info) => {
    if(err){
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = emailSender;
