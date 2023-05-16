"use strict";

const express = require("express");
const router = express.Router();
const cookieParser = require('cookie-parser');

// const router = require("../")

//로그인,회원가입 관련 이동
const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get('/laundry', ctrl.output.laundry);
router.get('/history', ctrl.output.history);
router.get('/myPage', ctrl.output.myPage);
router.get('/upload', ctrl.output.upload);
router.get('/review', ctrl.output.review);
// router.get('/review', ctrl.output.review);

router.use("/myPage", require("./myPage"));
router.use("/laundry", require("./laundry"));
router.use(cookieParser());
// router.use("/search", require("./search"));

router.post("/like", ctrl.process.like);
router.post("/review", ctrl.process.review);
router.post("/verify-token", ctrl.process.verifyToken);
// router.post("/upload", ctrl.process.upload);

module.exports = router; //웹으로 내보내기