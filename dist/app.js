"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_route_1 = require("./cats/cats.route");
var app = express();
var port = 8000;
app.use(express.json());
app.use(function (req, res, next) {
    next();
});
app.use(cats_route_1.default);
app.use(function (req, res, next) {
    res.status(404).json({ error: '404 not found error' });
});
app.listen(port, function () {
    console.log("server is running on port " + port);
});
//# sourceMappingURL=app.js.map