"use strict";

const logger = require("../../config/logger");
const Review = require("../../models/Review");
const Product = require("../../models/Product");

const jwt = require('jsonwebtoken');
const router = require(".");



const output ={
    home : (req, res) =>{
        logger.info(`GET / 304 "홈 화면으로 이동"`);
        res.render("home/index");
    },
    login : (req,res) => {
        logger.info(`GET /login 304 "로그인 화면으로 이동"`);
        res.render("home/login");
    },
    register : (req, res) => {
        logger.info(`GET /register 304 "회원가입 화면으로 이동"`);
        res.render("home/register");
    },
    laundry : (req, res) => {
        logger.info(`GET /laundry 304 "내세탁소 화면으로 이동"`);
        res.render("home/laundry");
    },
    laundryAdmin : (req, res) => {
        logger.info(`GET /laundryAdmin 304 "세탁소관리 화면으로 이동"`);
        res.render("home/laundryAdmin");
    },
    productAdmin : async(req, res) => {
        logger.info(`GET /productAdmin 304 "productAdmin 화면으로 이동"`);
        const product = new Product("7", "7"); //세탁소아이디가 7이라고 가정
        const productAdmin = await product.showProduct(); //세탁소상품 보여주기
        console.log(productAdmin);
        res.render("home/productAdmin",{
            productAdmin
        });
    },
    // reviewAdmin : (req, res) => {
    //     logger.info(`GET /reviewAdmin 304 "review관리 화면으로 이동"`);
    //     res.render("home/reviewAdmin");
    // },
    reviewAdmin : async (req, res) => {
        logger.info(`GET /laundry 304 "showreview 화면으로 이동"`);
        const S_ID = "7";//세탁소아이디 불러옴
        const review = new Review("7");
        const RV = await review.showReview();
        console.log(RV);
        res.render("home/reviewAdmin", {RV});
    },
    history : async (req, res) => {
        logger.info(`GET /history 304 "주문내역 화면으로 이동"`);
        res.render("home/history");
    },
    addProduct : async (req, res) => {
        logger.info(`GET /history 304 "상품추가 화면으로 이동"`);
        const S_ID = console.log(req.params.id);
        res.render("home/addProduct", {S_ID});
    },
    myPage : (req, res) => {
        logger.info(`GET /home/myPage 304 "마이페이지 화면으로 이동`);
        res.render("home/myPage");
    },
    //myPage 하위 기능
    profileEdit : (req, res) => {
        logger.info(`GET /myPage/profileEdit 304 "프로필편집 화면으로 이동"`);
        //실제 경로 , 라우팅 경로 : myPage/profileEdit
        res.render("home/profileEdit");
    },

    customerService : (req, res) => {
        logger.info(`GET /home/myPage/customerService 304 "고객센터 화면으로 이동`);
        res.render("home/customerService");
    },
    userManagement : (req, res) => {
        logger.info(`GET /home/myPage/userManagement 304 "탈퇴/로그아웃 화면으로 이동`);
        res.render("home/userManagement");
    },

    // 세탁소 세부페이지 
    laundryDetail: async(req, res) => {
        logger.info(`GET /laundry/detail/id 304 "세탁신청 세부 화면으로 이동`);
        console.log(req.body);
        const laundry = new Laundry(req.params.id);
        const product = new Product(req.params.id);
        
        //db에서 찾아온 내용 보여주기.
        // response로 json 형태로 데이터가 전달.
        const laundryDetailRes = await laundry.showDetail();
        const productDetailRes = await product.showDetail();
        console.log(laundryDetailRes, productDetailRes)
        res.render("home/LaundryDetail", 
        {
            laundryDetail : laundryDetailRes,
            productDetail : productDetailRes
        });
    },
    upload : async(req, res) =>{
        logger.info(`GET /home/upload 304 "upload 화면으로 이동`);
        res.render('home/upload');
    },
};

const process = {
    edit : async (req,res) => {
        console.log(req.body);
        const Edit = new MyPageEdit(req.body, "codus");
        const response = await Edit.update();
        return response;
    },
    addProduct : async (req,res) => {
        console.log(req.body);
        const add = new Product(req.body, "7"); //세탁소아이디는 토큰으로 받아오기
        const response = await add.addProduct(); //상품추가메소드
        return response;
    },
};

module.exports = {
    output,
    process,
};

const log = (response, url) =>{
    if(response.err){
            logger.error(
                `${url.method} ${url.path} ${url.status} Response: ${response.success}, ${response.err}"`
                );}
        else{
            logger.info(
                `${url.method} ${url.path} ${url.status} Response: ${response.success}, msg: ${response.msg || " "}"`
                );}
}

