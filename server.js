const express = require("express");
const path = require("path");
const nodemailer= require("nodemailer");
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
      alertMsg: function (msg) {
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
    
    let alerts = [];

    transporter.sendMail(mailOptions, function (err, info) {
     if (err) {
       console.log(err);
       alerts.push({ msg: `Message sent, Thank you \n \n <button><a href="/">Close</a></button>` });
     } else {
       alerts.push({ msg: `Message not sent \n \n <button><a href="/contact">Retry</a></button>` });
     }
    });

     res.render("contact", { alerts });
  })
});

const PORT = process.env.PORT || 3050;

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
