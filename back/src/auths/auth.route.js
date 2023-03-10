const express = require("express");
const router = express.Router();
const { authController, kakao } = require("./auth.module");

// find pw
const { userRepository } = require("../users/user.module")
const mailer = require("../../mail")
const JWT = require("../../lib/jwt")
const crypto = require("crypto");
const jwt = new JWT({ crypto })

router.post("/", (req, res, next) => authController.postLogin(req, res, next));

// node mailer
router.post('/mail', async(req, res, next) => {
    console.log(`req ::::`, req.body.data)
    try {
        const { email } = req.body.data;
        const tempPw = Math.random().toString(36).slice(-6);
        let emailParams = {
          toEmail: email,
          subject: "임시 비밀번호 안내",
          text: `임시 비밀번호는 ${tempPw} 입니다.`
        };
        mailer.sendGmail(emailParams);

        const hash = jwt.crypto
        .createHmac("sha256", "web7722")
        .update(tempPw)
        .digest("hex");
        updateData = { 
            userid : req.body.data.userid,
            userpw : hash
        }
        userRepository.updateProfile(updateData)
        res.status(200).send("메일 전송 성공");
    } catch (e) {
        next(e);
    }
});

router.get('/kakao',(req,res,next)=>kakao.login(req,res,next))

module.exports = router;
