const express = require('express');
const app = express();
const port = 4000;

const mysql = require('mysql2');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "root",
    database: "ContactPage",
    port: 8889,
});

const path = require('path');
app.use("/", express.static(path.join(__dirname, 'front-end')));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'front-end', 'index_file', 'LOGIN.html'));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, 'front-end', 'index_file', 'ContactUs.html'));
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


//insert new account to database
app.post("/insertAccount", (request, response) => {
    const signUpData = { fullname: request.body.fullname, username: request.body.username, Email: request.body.Email, password: request.body.password, gender: request.body.gender, field: request.body.field };
    const signUpQuery = "INSERT INTO login_signUp SET ?";
    
    pool.query(signUpQuery, signUpData, (error, result) => {
        if (error) throw error;
        response.send("Login data inserted successfully!");
    });
});



const { check, validationResult, body } = require("express-validator");

// Validation for insertContacts
const validateContact = [
  check('FirstName').trim().isLength({ min: 1 }).withMessage("First name is required."),
  check('lastname').trim().isLength({ min: 1 }).withMessage("Last name is required."),
  check('email').isEmail().withMessage("Email must be valid.").normalizeEmail(),
  check('mobileNumber').isMobilePhone().withMessage("Mobile number must be valid."),
  check('dob').isDate().withMessage("Date of birth must be a valid date."),
  check('message').trim().escape(),
  check('language').trim().escape(),
  check('Gender').trim().isIn(['Male', 'Female']).withMessage("Gender must be Male, Female."),
];

//insert into databse contactus infrmation
app.post("/insertContact", validateContact, (request, response) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {

    const errorMessages = "input errors try again";
    response.send(errorMessages);
    return response.status(400).json({ errors: errors.array() });
  }

  const contactData = {
    FirstName: request.body.FirstName,
    lastname: request.body.lastname,
    email: request.body.email,
    mobileNumber: request.body.mobileNumber,
    dob: request.body.dob,
    message: request.body.message,
    language: request.body.language,
    Gender: request.body.Gender
  };

  const contactQuery = "INSERT INTO UserContact SET ?";
  pool.query(contactQuery, contactData, (error, result) => {
      if (error) {
          return response.status(500).send("An error occurred while inserting contact data.");
      }
      response.send("Contact data inserted successfully!");
  });
});





//login database
app.post("/login", (request, response) => {
    const Email = request.body.Email;
    const password = request.body.password;

    const loginQuery = "SELECT * FROM login_signUp WHERE Email = ? AND password = ?";

    pool.query(loginQuery, [Email, password], (error, result) => {
        if (error) {
            console.error("Error:", error);
            response.status(500).send("Internal Server Error");
            return;
        }

        if (result.length > 0) {
            // Valid login credentials
            response.status(200).send("Login successful");
        } else {
            // Invalid login credentials
            response.status(401).send("Invalid login credentials");
        }
    });
});



// get message from database to view in comments page
app.get("/view", (request, response) => {
    const data = { FirstName: request.query.FirstName, lastname: request.query.lastname ,email: request.query.email ,mobileNumber: request.query.mobileNumber, dob: request.query.dob , message: request.query.message , language: request.query.language , Gender: request.query.Gender};
    const query = "SELECT * FROM UserContact ";
    pool.query(query, data, (error, result) => {
        if (error) throw error;
        response.json(result);
        });
});

