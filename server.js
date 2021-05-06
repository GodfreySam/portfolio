const express = require("express");
const session = require('express-session')
const path = require("path");
const nodemailer= require("nodemailer");
const dotenv = require("dotenv");
const exphbs = require("express-handlebars");
const fs = require("fs");
const multiparty = require("multiparty");
var smtpTransport = require("nodemailer-smtp-transport");
const { property } = require("underscore");

// Load config
dotenv.config({ path: "./config/config.env" });

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handlebars
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "index",
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");

// express sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

// Static folder
app.use(express.static(path.join(__dirname, "frontend")));

// @desc Home page
// @route GET /
app.get("/", (req, res) => {
  res.render('home');
});

// @desc About page
// @route GET /about
app.get("/about", (req, res) => {
  res.render('about');
});

// @desc Work page
// @route GET /work
app.get("/work", (req, res) => {
  res.render('work');
});

// @desc Resume page
// @route GET /resume
app.get("/resume", (req, res) => {
  res.render('resume');
});

// @desc Contact page
// @route GET /contact
app.get("/contact", (req, res) => {
  res.render('contact');
});

// @desc Resume full view
// @route GET /full-view
app.get("/godfrey-samuel-cv", (req, res) => {
  const item = "./frontend/static/GodfreySam-CV.pdf";
  if (fs.existsSync(item)) {
    res.contentType("application/pdf");
    fs.createReadStream(item).pipe(res);
  } else {
    res.status(500);
    console.log("File not found");
  }
});

let transporter = nodemailer.createTransport(smtpTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
}));

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post("/mail", (req, res)=> {

  let form = new multiparty.Form();
  let data = {};

  form.parse(req, (err, fields) => {
    console.log(fields);
    Object.keys(fields).forEach(property => {
      data[property] = fields[property].toString();
    })
  });

  // let name = req.body.Name;
  // let email = req.body.Email;
  // let message = req.body.Message;

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: "From Portfolio Contact Form",
    text: `
      From: ${data.Name} 
      Email: <${data.Email}> 
      \n${data.Message}
      `,
  };

  console.log(mailOptions);

  transporter.sendMail(mailOptions, function(err, info) {
    if(err) {
      console.log(err);
      res.status(500).send("something went wrong.");
    } else {
      res.status(200).send("Message sent");
    }
  })
});

const PORT = process.env.PORT || 3050;

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
