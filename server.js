var express = require("express");
var app = express();

var apiR = require("./routes/apiRoutes");
var htmlR = require("./routes/htmlRoutes");

var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api",apiR);
app.use("/", htmlR);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
