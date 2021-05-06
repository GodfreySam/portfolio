const express = require("express");
const path = require("path");
const nodemailer= require("nodemailer");
const dotenv = require("dotenv");
const exphbs = require("express-handlebars");
const fs = require("fs");
var smtpTransport = require("nodemailer-smtp-transport");

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

app.post("/mail", (req, res)=> {
  
  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: "From Portfolio Contact Form",
    text: `
      From: ${req.body.name}
      Email: ${req.body.email} \n \n
      ${req.body.message}`,
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if(err) {
      console.log(err);
      res.status(500).send(`
       <div style="padding-top:10rem; justify-content:center;
        align-item:center; text-align:center; text-decoration:none;
        font-family:Arial; font-weight:bold;
       ">
       Message not sent
        <br><button class="btn anchor">
              <a href="/contact">Retry</a>
            </button>
       `);
    } else {
      res.status(200).send(`
       <div style="padding-top:10rem; justify-content:center;
        align-item:center; text-align:center; text-decoration:none;
        font-family:Arial; font-weight:bold;
       ">
       Message sent, thanks for getting in touch
        <br><button class="btn anchor">
              <a href="/">Back</a>
            </button>
       `);
    }
  })
});

const PORT = process.env.PORT || 3050;

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
