//  dependencies //
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

const { PORT = 3001, DATABASE_URL } = process.env;
