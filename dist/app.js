"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_route_1 = require("./cats/cats.route");
var app = express();
var port = 8000;
var Server = (function () {
    function Server() {
        var app = express();
        this.app = app;
    }
    Server.prototype.setRoute = function () {
        this.app.use(cats_route_1.default);
    };
    Server.prototype.setMiddlaware = function () {
        this.app.use(express.json());
        this.app.use(function (req, res, next) {
            next();
        });
        this.setRoute();
        this.app.use(function (req, res, next) {
            res.status(404).json({ error: '404 not found error' });
        });
    };
    Server.prototype.listen = function () {
        this.setMiddlaware();
        this.app.listen(port, function () {
            console.log("server is running on port " + port);
        });
    };
    return Server;
}());
var init = function () {
    var server = new Server();
    server.listen();
};
init();
//# sourceMappingURL=app.js.map