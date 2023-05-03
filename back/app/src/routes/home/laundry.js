"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.laundry);

router.get("/productAdmin", ctrl.output.productAdmin);
router.get("/productAdmin/:id", ctrl.output.addProduct);
router.get("/laundryAdmin", ctrl.output.laundryAdmin);
router.get("/reviewAdmin", ctrl.output.reviewAdmin);

router.post("/addProduct", ctrl.process.addProduct);

module.exports = router; //웹으로 내보내기