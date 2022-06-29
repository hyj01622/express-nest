"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCat = exports.patchCat = exports.putCat = exports.createCat = exports.readCat = exports.readAllCat = void 0;
var cats_model_1 = require("./cats.model");
var readAllCat = function (req, res) {
    try {
        var cats = cats_model_1.Cat;
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
};
exports.readAllCat = readAllCat;
var readCat = function (req, res) {
    try {
        var id_1 = req.params.id;
        var cats = cats_model_1.Cat.find(function (cat) {
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
};
exports.readCat = readCat;
var createCat = function (req, res) {
    try {
        var data = req.body;
        cats_model_1.Cat.push(data);
        res.status(200).json({
            data: { data: data },
        });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).send({
                error: err.message,
            });
        }
    }
};
exports.createCat = createCat;
var putCat = function (req, res) {
    try {
        var params_1 = req.params;
        var body_1 = req.body;
        var result_1;
        cats_model_1.Cat.forEach(function (cat) {
            if (cat.id === params_1.id) {
                cat = body_1;
                result_1 = cat;
            }
        });
        res.status(200).json({
            data: {
                cat: result_1,
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
};
exports.putCat = putCat;
var patchCat = function (req, res) {
    try {
        var params_2 = req.params;
        var body_2 = req.body;
        var result_2;
        cats_model_1.Cat.forEach(function (cat) {
            if (cat.id === params_2.id) {
                cat = __assign(__assign({}, cat), body_2);
                result_2 = cat;
            }
        });
        res.status(200).json({
            data: {
                cat: result_2,
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
};
exports.patchCat = patchCat;
var deleteCat = function (req, res) {
    try {
        var params_3 = req.params;
        var newCat = cats_model_1.Cat.filter(function (cat) { return cat.id !== params_3.id; });
        res.status(200).json({
            data: newCat,
        });
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).send({
                error: err.message,
            });
        }
    }
};
exports.deleteCat = deleteCat;
//# sourceMappingURL=cats.services.js.map