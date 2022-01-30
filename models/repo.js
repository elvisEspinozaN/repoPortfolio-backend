// dependencies //
const mongoose = require("mongoose");

// schema //
const Schema = mongoose.Schema;

const repoSchema = new Schema(
  {
    author: String,
    pName: String,
    progress: String,
    url: String,
  },
  { timestamp: true }
);

module.exports = mongoose.model("Repo", repoSchema);
