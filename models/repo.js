// dependencies //
const mongoose = require("mongoose");

// schema //
const Schema = mongoose.Schema;

const repoSchema = new Schema(
  {
    author: String,
    pName: String,
    progress: Number,
    url: String,
  },
  { timestamp: true }
);
