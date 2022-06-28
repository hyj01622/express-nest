"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
var port = 8000;
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    next();
});
app.get('/cats', function (req, res) {
    try {
        var cats = app_model_1.Cat;
        res.status(200).json({
            data: {
                cats: cats,
            },
        });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).send({
                error: err.message,
            });
        }
    }
});
app.get('/cats/:id', function (req, res) {
    try {
        var id_1 = req.params.id;
        var cats = app_model_1.Cat.find(function (cat) {
            return cat.id === id_1;
        });
        res.status(200).json({
            data: {
                cats: cats,
            },
        });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).send({
                error: err.message,
            });
        }
    }
});
app.use(function (req, res, next) {
    res.status(404).json({ error: '404 not found error' });
});
app.listen(port, function () {
    console.log("server is running on port " + port);
});
//# sourceMappingURL=app.js.map