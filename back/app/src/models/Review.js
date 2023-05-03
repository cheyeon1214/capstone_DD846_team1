"use strict";
const db = require("../config/db");
const {response} = require("express");


class Review {
    constructor(body) {
        // this.body에는 req.params.id가 들어가있음
        this.body = body;
      }
      async showReview() {
        const S_ID = this.body;
        console.log(S_ID);
        const show = await Review.show(S_ID);
        return show;
      }
    //   async update() {
        
    //     const RV = await Review.review(O_NUM, S_ID, title, body, rating, U_ID);
    //     return RV;
        
    // }
    async show() {
        const S_ID = this.body;
        const show = await Review.show(S_ID);
        return show;
        }
    
  static async show(S_ID) {
    return new Promise ((resolve, reject) => {
    db.query("USE CAPSTONE", (err, result) => {
        const query = "SELECT * FROM REVIEW where S_ID = ?;";
        if (err) reject(err);
        //const keys = Object.keys(query);
        db.query(query,  [S_ID], (err, data) => {
            if (err) reject(err);
            else {
                const show = data;
                resolve(
                  show
                )
                }
            });
          })
    });
}
      
}


module.exports = Review; 