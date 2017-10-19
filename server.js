var app = require("express")();

app.get("/", function (req, res) {
  var regex = /\((.+?)\)/;
  var info = {
    "ipaddress": req.headers["x-forwarded-for"].split(",")[0],
    "language": req.headers["accept-language"].split(",")[0],
    "software": regex.exec(req.headers["user-agent"])[1],
  }
  res.send(JSON.stringify(info));
});

app.get("/full", function (req, res) {
  var regex = /\((.+?)\)/;
  var info = {
    "ipaddress": req.headers["x-forwarded-for"].split(",")[0],
    "language": req.headers["accept-language"].split(",")[0],
    "software": regex.exec(req.headers["user-agent"])[1],
    "full_information": req.headers
  }
  res.send(JSON.stringify(info));
});

app.listen(8000);