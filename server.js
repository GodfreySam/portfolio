const express = require("express");
const flash = require("connect-flash");
const session = require("express-session");
const path = require("path");
const nodemailer= require("nodemailer");
const dotenv = require("dotenv");
const exphbs = require("express-handlebars");
const fs = require("fs");
const cors = require("cors");
const request = require("request");

// Load config
dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(cors({ origin: "*" }));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handlebars
app.engine(
  ".hbs",
  exphbs({
    helpers: {
      successMsg: function (msg) {
        if (typeof msg != "") {
          return msg;
        }
      },
      errorMsg: function (msg) {
        if (typeof msg != "") {
          return msg;
        }
      },
      checkErr: function (err) {
        if (typeof err != "") {
          return err;
        }
      },
    },
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

// Connect flash
app.use(flash());

// Set global variables
app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

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

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

app.post("/contact", (req, res)=> {
  const captcha = req.body["g-recaptcha-response"];
  // console.log(req.body)
  if (captcha === undefined || captcha === "" || captcha === null) {
    req.flash("error_msg", "Please select captcha");
    return res.redirect("/contact");
  }

  // verify URL
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${captcha}&remoteip=${req.socket.remoteAddress}`;

  request(verifyUrl, (err, response, body) => {
    body = JSON.parse(body);

    // If not successful
    if (body.success !== undefined && !body.success) {
      req.flash("error_msg", "Failed captcha verification");
      return res.redirect("/register");
    }

    // If successful
  const mailOptions = {
    from: req.body.name,
    to: process.env.MAIL_USER,
    subject: "From Portfolio",
    text: `
      From: ${req.body.name}
      Email: ${req.body.email} \n \n
      ${req.body.message}`,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
      req.flash("error_msg", "Message not sent");
      res.redirect("/contact");
    } else {
      req.flash("success_msg", "Captcha passed and Message sent, Thank you");
      res.redirect("/contact");
    }
  });
  });
  
});

const PORT = process.env.PORT || 3050;

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
