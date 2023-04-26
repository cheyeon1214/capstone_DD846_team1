"use strict";

const logger = require("../../config/logger");
const Laundry = require("../../models/Laundry");
const Product = require("../../models/Product");
const Cart = require("../../models/Cart");
const Likes = require("../../models/Likes");
const LaundryOrder = require("../../models/LaundryOrder");
const MyPage = require("../../models/Mypage");
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
        logger.info(`GET /laundry 304 "세탁신청 화면으로 이동"`);
        res.render("home/laundry");
    },
    history : (req, res) => {
        logger.info(`GET /history 304 "이용내역 화면으로 이동"`);
        res.render("home/history");
    },
    myPage : (req, res) => {
        logger.info(`GET /home/myPage 304 "마이페이지 화면으로 이동`);
        res.render("home/myPage");
    },
    favoriteList : (req, res) => {
        logger.info(`GET /myPage/favoriteList 304 "프로필편집 화면으로 이동"`);
        res.render("home/favoriteList");
        //실제 경로 , 라우팅 경로 : myPage/favoriteList
        /* var user;
         //클라이언트가 HTTP요청 헤더에 토큰 받아서 보낼거임
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, "secretKey", (err, decoded) => {
          if (err) {
            console.log("토큰 만료 오류");
            const json = {
              code : 401,
              message : "로그인 후 이용해주세요." 
            }
            return res.status(401).send(json);
          }
          try {
            // JWT 토큰 검증을 수행한다.
            const decoded = jwt.verify(token, 'secretKey');
            // 검증이 완료된 경우, 요청 객체에 인증 정보를 추가한다.
            //디코드한 유저를 변수로 저장.
            console.log(decoded);
           user = decoded.id;
          } catch (err) {
            // JWT 토큰 검증 실패 시, 403 Forbidden 에러를 반환한다.
            const json = {
              code: 403,
              message: '잘못된 인증 정보입니다.'
            };
            return res.status(403).send(json);
          }
        }); */
        //토큰 받아오면 하드코딩 해제
        const favorite = new MyPage("yuze");

        const response = favorite.showFavoriteList();
        //const response1 = await cart.addOrderList();
        console.log(response);
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
        const laundry = new Laundry(req.params.id);
        const product = new Product(req.params.id);
        
        //db에서 찾아온 내용 보여주기.
        // response로 json 형태로 데이터가 전달.
        const laundryDetailRes = await laundry.showDetail();
        const productDetailRes = await product.showDetail();
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
    addCart: async (req, res) => {
        // var user;
        //  //클라이언트가 HTTP요청 헤더에 토큰 받아서 보낼거임
        // const token = req.headers.authorization.split(" ")[1];
        // jwt.verify(token, "secretKey", (err, decoded) => {
        //   if (err) {
        //     console.log("토큰 만료 오류");
        //     const json = {
        //       code : 401,
        //       message : "로그인 후 이용해주세요." 
        //     }
        //     return res.status(401).send(json);
        //   }
        //   try {
        //     // JWT 토큰 검증을 수행한다.
        //     const decoded = jwt.verify(token, 'secretKey');
        //     // 검증이 완료된 경우, 요청 객체에 인증 정보를 추가한다.
        //     //디코드한 유저를 변수로 저장.
        //     console.log(decoded);
        //    user = decoded.id;
        //   } catch (err) {
        //     // JWT 토큰 검증 실패 시, 403 Forbidden 에러를 반환한다.
        //     const json = {
        //       code: 403,
        //       message: '잘못된 인증 정보입니다.'
        //     };
        //     return res.status(403).send(json);
        //  }
     //   });
        //토큰 받아오면 하드코딩 해제
        const cart = new Cart(req.body, "yuze"/*user*/);
        const response = await cart.add();
        const data = response;
        const orderNum = data.orderNumber;
        const laundryOrder = new LaundryOrder(orderNum);
        const cartRes = await laundryOrder.showCart();
        console.log(cartRes);
        res.render("home/laundryOrder", 
        {
            cartRes : cartRes
        });
    },

    like: async (req,res) => {
        //req.body -> 1과 0 리턴 
        console.log(req.body,"yuze");
        const like = new Likes(req.body, "yuze");
        const response = await like.insert();
        
        return true;
    }
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
