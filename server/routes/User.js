const { Router } = require('express');
const router = Router();
const { User } = require('../models/');

router.post("/signup", async (req, res, next) => {
    
    try{

        const { email, password, name } = req.body;
        console.log(email, password, name);
    
        const checkEmail = await User.findOne({ email });
        // console.log(checkEmail)
    
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
        })
    }catch(e){
        throw new Error(e)
    }
    

});

router.post('/login', async(req, res) =>{
    try {
        let {email, password} = req.body;
        console.log(email,password);

        const checkEmail = await User.findOne({email})
        // console.log(checkEmail)
        
        if(!checkEmail){
            res.status(401);
            res.json({
                fail: '비밀번호가 맞지 않습니다.'
            });
            return;
        }

    } catch (e) {
        throw new Error(e)
    }
})

module.exports = router;