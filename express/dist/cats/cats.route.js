"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cats_services_1 = require("./cats.services");
var router = express_1.Router();
router.get('/cats/', cats_services_1.readAllCat);
router.get('/cats/:id/', cats_services_1.readCat);
router.post('/cats/', cats_services_1.createCat);
router.put('/cats/:id', cats_services_1.putCat);
router.patch('/cats/:id', cats_services_1.patchCat);
router.delete('/cats/:id', cats_services_1.deleteCat);
exports.default = router;
//# sourceMappingURL=cats.route.js.map