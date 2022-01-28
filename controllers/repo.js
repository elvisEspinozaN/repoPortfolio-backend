// dependencies //
const express = require("express");
const Repo = require("../models/repo");

// router //
const repoRouter = express.Router();

// index route //
repoRouter.get("/repo", (req, res) => {
  try {
    res.json(await Repo.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
});

// delete route //
repoRouter.get("/repo/:id", async (req, res) => {
  try {
    res.json(await Repo.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

// create route //
repoRouter.post("/repo", async (req, res) => {
  try {
    res.json(await Recipe.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

// update route //
repoRouter.put("/repo/:id", async (req, res) => {
  try {
    res.json(
      await Repo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json(error);
  }
});

module.ezports = repoRouter;
