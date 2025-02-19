const express = require("express");
const router = express.Router();
const teamController = require("../controllers/teamController");

router.get("/", teamController.listTeams);

router.get("/:id", (req, res) => {
  res.json({ mssg: "get specific team" });
});

router.post("/", teamController.createTeam);

module.exports = router;
