const express = require('express');
const app = express();
const router = express.Router();
const nodemailer = require('nodemailer');
const mysql = require('mysql2');
module.exports = router;
//------ SEND QUERY TO SQL DB ------------


router.get('/', async (req, res) => {


    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'manager',
        database: 'new1'
      });
    
    
      connection.connect((error) => {
        if (error) {
          console.error('Error connecting to MySQL database:', error);
          return;
        }
        console.log('Connected to MySQL database!');
      });

      connection.query('SELECT * FROM new2', (error, results, fields) => {
        if (error) {
          console.error('Error executing MySQL query:', error);
          return;
        }
        console.log('Results:', results);
      });


      connection.end((error) => {
        if (error) {
          console.error('Error closing MySQL database connection:', error);
          return;
        }
        console.log('Connection to MySQL database closed!');
      });


  })



//-------SEND EMAILS -----


// create transporter object
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com', // replace with your email
      pass: 'your-password' // replace with your password
    }
  });
  
  // define route to send email
  app.get('/send-email', (req, res) => {
    // define email options
    let mailOptions = {
      from: 'your-email@gmail.com', // sender address
      to: 'recipient-email@example.com', // list of receivers
      subject: 'Test Email', // Subject line
      text: 'Hello from Nodemailer!' // plain text body
    };
  
    // send email using transporter object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.send('Error occurred: ' + error.message);
      } else {
        console.log('Email sent: ' + info.response);
        res.send('Email sent successfully!');
      }
    });
  });
  

  
  
  
  //------- CHECK AVAILABILITY  -----
  //------- SET APPOINTMENT  -----
  //------- GET APPOINTMENTS  -----
  //------- CANCEL APPOINTMENT -----
  
  //------- MOVE ALL APPOINTMENTS  -----
  //------- CANCEL ALL APPOINTMENTS  -----



  //------- GET ALL APOINTMENTS PER USER -----
  //-------LIMIT DATES RANGE -------