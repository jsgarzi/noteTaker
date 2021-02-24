var noteData = require("../db/db.json");
var router = require("express").Router();
var fs = require('fs');

  router.get("/notes", function(req, res) {
    res.json(noteData);
  });

  router.post("/notes", function(req, res) {
    var notePost = req.body;
    var id = noteData.length;
    let post = { 
      id : id,
      title: notePost.title,
      text: notePost.text 
  };
  noteData.push(post);
  let data = JSON.stringify(noteData);
  fs.writeFileSync('./db/db.json', data);
  });

  // router.clear("/notes/:id", function(req, res) {
  //   res.json(noteData);
  // });




module.exports = router;