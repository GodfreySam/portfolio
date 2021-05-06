const express = require("express");
const path = require("path");
const nodemailer= require("nodemailer");
const flash = require("connect-flash");
const session = require("express-session");
const dotenv = require("dotenv");
const exphbs = require("express-handlebars");
const fs = require("fs");
const cors = require("cors");
const multiparty = require("multiparty");

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
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
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

app.post("/mail", (req, res)=> {
  
  let form = new multiparty.Form();
  let data = {};
  form.parse(req, function (err, fields) {
    Object.keys(fields).forEach(function (property) {
      data[property] = fields[property].toString();
    });

    const mailOptions = {
      from: data.name,
      to: process.env.MAIL_USER,
      subject: "From Portfolio",
      text: `
      From: ${data.name}
      Email: ${data.email} \n \n
      ${data.message}`,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
        req.flash("error_msg", ["Message not sent", "kindly retry"]);
        res.redirect('/contact');
      } else {
        req.flash("success_msg", [
          "Message sent",
          "thanks for getting in touch",
        ]);
        res.redirect('/');
      }
    });
  })
});

const PORT = process.env.PORT || 3050;

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
