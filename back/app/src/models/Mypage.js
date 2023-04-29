"use strict";
const db = require("../config/db");
const {response} = require("express");
//const LaundryDetail = require("./LaundryDetail");

// 세탁소 클래스 생성

class MyPage {
    constructor(body) {
        // this.body에는 req.params.id가 들어가있음
        this.body = body;
      }
      async showFavoriteList() {
        const id = this.body;
        const List = await MyPage.showList(id);
              
        return List;
        
    }
    static async showList(id) {
      return new Promise ((resolve, reject) => {
      db.query("USE CAPSTONE", (err, result) => {
          const query = "SELECT * FROM LIKES where U_ID = ?;";
          if (err) reject(err);
          //const keys = Object.keys(query);
          db.query(query, [id], (err, data) => {
              if (err) reject(err);
              else {
                // data는 배열 형태이다.
                const product = data;
                resolve(product)
                }
              });
            })
      });
  }
    
      
}


module.exports = MyPage; 