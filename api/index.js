const express = require("express");
const PORT = 3000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const contactModel = require("../models/ContactModel");
const userModel = require("../models/UserModel");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://kunwarabhishekug21:w5ocnw3JIf7keKH8@cluster0.g2hhoxx.mongodb.net/MyWebsite?retryWrites=true&w=majority"
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Successfully Connected to DB");

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

  app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
  });

  app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
  });

  app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/public/signup.html");
  });

  app.post("/contactForm", (req, res) => {
    const contactDetails = new contactModel(req.body);

    contactDetails
      .save()
      .then((data) => {
        console.log(data);
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.post("/signupForm", (req, res) => {
    const userDetails = new userModel(req.body);

    userDetails
      .save()
      .then((data) => {
        console.log(data);
        res.sendFile(__dirname + "/public/signupsuccess.html");
      })
      .catch((err) => {
        console.log(err);
        res.sendFile(__dirname + "/public/signupfailed.html");
      });
  });

  app.post("/signinForm", (req, res) => {
    userModel
      .findOne({ userName: req.body.userName })
      .then((user) => {
        if (user.password == req.body.password)
          res.sendFile(__dirname + "/public/signinsuccess.html");
        else res.sendFile(__dirname + "/public/signinfailed.html");
      })
      .catch((err) => {
        console.log(err);
        res.sendFile(__dirname + "/public/signinfailed.html");
      });
  });

  app.listen(PORT, () => {
    console.log("Website Up and Running at Port ", PORT);
  });
});
