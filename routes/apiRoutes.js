var noteData = require("../db/db.json");
var router = require("express").Router();
var fs = require('fs');

router.get("/notes", function (req, res) {
  res.json(noteData);
});

router.post("/notes", function (req, res) {
  var notePost = req.body;
  var id = noteData.length;
  let post = {
    id: id,
    title: notePost.title,
    text: notePost.text
  };
  noteData.push(post);
  let data = JSON.stringify(noteData);
  fs.writeFileSync('./db/db.json', data);
  res.json(noteData);
});

router.delete("/notes/:id", function (req, res) {
  id = req.params.id
  if (noteData.length > 1) {
    if (id == 0) {
      noteData.shift()
    }
    else {
      noteData.splice(id, 1);
    }
    for (let i = id; i < noteData.length; i++) {
      noteData[i].id = i;
    }
  }
  else {
    noteData.length = 0
  }
  fs.writeFileSync('./db/db.json', JSON.stringify(noteData));
  res.json(noteData);
});




module.exports = router;