'use strict';
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
var config = JSON.parse(fs.readFileSync("config.json"));

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    // host: 'smtp.example.com',
    service: 'gmail',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'forraibrigi@gmail.com',
        pass: config.password
    },
    tls: {
      rejectUnauthorized: false
    }
});


let helperOptions = {
    from: '"brigi👻" <forraibrigi@gmail.com>>', // sender address
    to: 'forraibrigi@gmail.com, zsolt.bako@gmail.com', // list of receivers
    subject: 'testing meonin contact', // Subject line
    text: 'na, eddig az uzenet nem ment at :D terminalbol kuldozgetek neked emailt :)', // plain text body
    // html: '<b><3</b>'
};

transporter.sendMail(helperOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    console.log(info);
});
