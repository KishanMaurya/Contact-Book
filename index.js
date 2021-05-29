const express = require("express");
const app = express();
const contact = require("./routes/contact.routes");
const apiControl = require("./utility/apiController");
const con = require("./connection");

app.use(express.json());

app.use("/contact", contact);

app.use(function (req, res, next) {
  res.status(404);
  res.send("404: File Not Found");
  return;
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    error: {
      message: err.message,
    },
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000...");
});
