'use strict';
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const aws = require('aws-sdk');
let config = new aws.S3({
  pwd: process.env.CGP_1,
});
// var config = JSON.parse(fs.readFileSync("config.json"));

let emailSender = function() {
  let transporter = nodemailer.createTransport({
      // host: 'smtp.gmail.com',
      // port: 587,
      // secure: false, // secure:true for port 465, secure:false for port 587
      service: 'gmail',
      auth: {
          user: 'forraibrigi@gmail.com',
          pass: config.pwd
      },
      tls: {
        rejectUnauthorized: false
      }
  });

  let mailOptions = {
      sender: 'zsolt.bako@gmail.com',
      // from: '"brigi👻" <zsolt.bako@gmail.com>>', // sender address
      to: 'forraibrigi@gmail.com', // list of receivers
      subject: 'replyy', // Subject line
      text: 'na, eddig az uzenet nem ment at :D terminalbol kuldozgetek neked emailt :)', // plain text body
      // html: '<b><3</b>'
      replyTo: 'zsolt.bako@gmail.com'
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
      console.log(info);
  });
};

module.exports = emailSender;
