var noteData = require("../db/db.json");
var router = require("express").Router();

  router.get("/notes", function(req, res) {
    res.json(tableData);
  });

  router.post("/notes", function(req, res) {
    res.json(tableData);
  });

  router.clear("/notes/:id", function(req, res) {
    res.json(tableData);
  });

module.exports = router;