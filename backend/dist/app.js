"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express = require("express");
var http = require("http");
const dynamicFormRouter_1 = __importDefault(require("./routers/dynamicFormRouter"));
const bodyParser = require("body-parser");
exports.app = express();
exports.app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }
    next();
});
exports.app.set("query parser", "extended");
exports.app.use(bodyParser.json({
    limit: "70mb",
    extended: true,
}));
exports.app.use(bodyParser.urlencoded({
    extended: true,
}));
/**
 * Routes
 */
exports.app.use("/addform", dynamicFormRouter_1.default);
exports.app.get("/", function (req, res) {
    res.send("Welcome to Edim API");
});
//  app.listen(port);
http.createServer(exports.app).listen(4040, function () {
    console.log("server ");
});
//# sourceMappingURL=app.js.map