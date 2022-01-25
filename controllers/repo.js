// dependencies //
const express = require("express");
const Repo = require("../models/repo");

// router //
const repoRouter = express.Router();

// index route //
repoRouter.get("/", (req, res) => {
  try {
    res.json(await Repo.find(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});
