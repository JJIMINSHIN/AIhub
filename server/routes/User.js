const { Router } = require('express');
const router = Router();
const { User } = require('../models/');
const jwt = require('jsonwebtoken');
const shortId = require('../models/schemas/type/short');
const secret = require('./../config/jwtConfig')

router.post("/signup", async (req, res) => {
    
    try{
        const { email, password, name } = req.body;
        console.log(email, password, name);
    
        const checkEmail = await User.findOne({ email });
    
        if (checkEmail) {
            res.status(500);
            res.json({
                error: '이미 가입된 이메일 입니다.'
            })
            return;
        }
    
        await User.create({
            email,
            password,
            name
        });
    
        res.json({
            result: "회원가입이 완료되었습니다. 재로그인 해주세요."
        });
        
    }catch(e){
        throw new Error(e)
    }
    

});

router.post('/login', async(req, res) =>{
    try {
        const {email, password} = req.body;

        const userData = await User.findOne({email});
        console.log(userData);

        if (!userData) {
            throw new Error("회원을 찾을 수 없습니다.");
            return;
        }

        let hashPassword = await passwordHash(password);
        if(hashPassword !== userData.hashPassword){
            throw new Error('비밀번호가 일치하지 않습니다.');
            return;
        }

        jwt.sign({
            email: email,
            name: checkEmail.name
        }, secret.secret,
        {
            expiresIn : '1d'
        },(err, token) =>{
            if(err) {
                res.status(401).json({success: false, errormessage: 'token sign fail'});
            }
            else{
                res.json({
                    status: true,
                    accessToken: token,
                    email: email,
                    name: checkEmail.name
                });
            } 
        })

    } catch (e) {
        throw new Error(e)
    }
})





const passwordHash =async(pw) =>{
    return crypto.createHash('sha1').update(pw).digest('hex');
}

module.exports = router;