"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cats_model_1 = require("./cats.model");
var router = express_1.Router();
router.get('/cats/', function (req, res) {
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
});
router.get('/cats/:id/', function (req, res) {
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
});
router.post('/cats/', function (req, res) {
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
});
exports.default = router;
//# sourceMappingURL=cats.route.js.map