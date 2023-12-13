var express = require("express");
var http = require("http");

import dynamicFormRouter from "./routers/dynamicFormRouter";

const bodyParser = require("body-parser");

export const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

app.set("query parser", "extended");
app.use(
  bodyParser.json({
    limit: "70mb",
    extended: true,
  })
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

/**
 * Routes
 */
app.use("/addform", dynamicFormRouter);

app.get("/", function (req, res) {
  res.send("Welcome to dynamic form API");
});

//  app.listen(port);

http.createServer(app).listen(4040, function () {
  console.log("server ");
});
