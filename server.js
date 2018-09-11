var path = require("path"),
    express = require("express");

var DIST_DIR = path.join(__dirname, "dist"),
	PUBLIC_DIR = path.join(__dirname, "public"),
    PORT = 80,
    app = express();

//Serving the files on the dist & public folder
app.use("/dist",express.static(DIST_DIR));
app.use(express.static(PUBLIC_DIR));

//Send index.html when the user access the web
app.get("*", function (req, res) {
  res.sendFile(path.join(PUBLIC_DIR, "index.html"));
});

app.listen(PORT);
