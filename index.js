'use strict';
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const pwd = process.env.CGP_1;
const user = process.env.CGU_1;

let emailSender = function() {
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: user,
          pass: pwd
      },
      tls: {
        rejectUnauthorized: false
      }
  });

  let mailOptions = {
      sender: 'zsolt.bako@gmail.com',
      // from: '"brigi👻" <zsolt.bako@gmail.com>>', // sender address
      to: 'forraibrigi@gmail.com', // list of receivers
      subject: 'test', // Subject line
      text: 'uzenet', // plain text body
      // html: '<b><3</b>'
      replyTo: 'zsolt.bako@gmail.com'
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
};

module.exports = emailSender;
