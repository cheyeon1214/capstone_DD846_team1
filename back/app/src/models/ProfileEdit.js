"use strict";
const db = require("../config/db");
const {response} = require("express");
const crypto = require("crypto");

class ProfileEdit {
    constructor(body, S_ID) {
        this.body = body;
        this.S_ID = S_ID;
      }
      async update() {
        const password = this.body.password;
        const phone = this.body.phone;
        const email = this.body.email;
        const S_ID = this.S_ID;
        var salt = Math.round(new Date().valueOf() * Math.random()) + "";
        var hashPsword = crypto
          .createHash("sha512")
          .update(password + salt)
          .digest("hex");
        const PW = await ProfileEdit.PW(hashPsword,phone,email, S_ID);
        return PW;
        
    }
    
    static async PW(password,phone,email, S_ID) {
      return new Promise ((resolve, reject) => {
      db.query("USE CAPSTONE", (err, result) => {
          const query = "UPDATE CEO SET C_PW = ?, C_PHONE=?, S_mail = ? WHERE S_ID = ?;";
          if (err) reject(err);
          //const keys = Object.keys(query);
          db.query(query,  [password, phone, email, S_ID], (err, data) => {
              if (err) reject(err);
              else {
                  resolve({
                    success: true
                  })
                  }
              });
            })
      });
  }
    
      
}


module.exports = ProfileEdit; 