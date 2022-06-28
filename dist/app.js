"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 8000;
app.get('/', function (req, res) {
    res.json({ name: 'yeojin' });
});
app.listen(port, function () {
    console.log("app is running on port " + port);
});
//# sourceMappingURL=app.js.map