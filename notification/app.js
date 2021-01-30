const express = require("express");
const cors = require("cors");
require("dotenv").config();

const consumer = require("./consumer");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

consumer();

app.listen(3002, (err) => {
  if (err) {
    console.err(err);
  } else {
    console.log(
      "Server for Notification API started at: http://localhost:3002"
    );
  }
});
