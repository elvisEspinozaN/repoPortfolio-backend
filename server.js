//  dependencies //
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

const { PORT = 3001, DATABASE_URL } = process.env;

// connection //
mongoose.connect(DATABASE_URL);
mongoose.connection
  .on("open", () => console.log("mongoDB connected"))
  .on("close", () => console.log("mongoDB disconnected"))
  .on("error", (error) => console.log(error));
