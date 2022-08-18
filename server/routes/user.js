const { Router } = require('express');
const { User } = require('../models');
const router = Router();
const cryto = require("crypto");
const jwtConfig = require('./../config/jwtConfig')
const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {

    try {
        const { email, password, name } = req.body;
        console.log(email, password, name);

        let psswordHash = hashPassword(password);
        console.log(password);
        const checkEmail = await User.findOne({ email })



        if (checkEmail) {
            res.status(500);
            res.json({
                error: '이미 가입된 이메일 입니다.'
            })
            return;
        }

        await User.create({
            email,
            password: psswordHash,
            name
        });

        res.json({
            result: '회원가입이 완료되었습니다. 로그인해주세요'
        })
    } catch (e) {
        throw new Error(e)
    }


}); //signup

router.post('/login', async (req, res) => {

    try {

        let { email, password } = req.body;
        console.log(email, password)

        let psswordHash = hashPassword(password);

        const checkEmail = await User.findOne({ email });
        console.log('checkEmail', checkEmail)

        if (!checkEmail) {
            res.status(401);
            res.json({
                fail: '존재하지 않는 이메일입니다.'
            })
            return;
        }

        if (psswordHash !== checkEmail.password) {
            res.status(401);
            res.json({
                fail: "비밀번호가 틀렸습니다."
            })
            return;
        }

        jwt.sign({
            email:email,
            name: checkEmail.name
        },jwtConfig.secret,{
            expiresIn: '1d'
        }, (err, token) =>{
            if(err){
                res.status(401).json({
                    status: false,
                    message: '로그인을 해주세요'
                });
            }else{
                res.json({
                    status: true,
                    accessToken: token,
                    email: email,
                    name: checkEmail.name
                })
            }
        }
        )

    } catch (e) {
        throw new Error(e)
    }



}); //login


// password hash
const hashPassword = (password) => {
    return cryto.createHash('sha1').update(password).digest('hex');
}

module.exports = router;