const { Router } = require('express');
const { userInfo } = require('os');
const router = Router();

router.post('/signup', async(req, res) =>{
    const {email, password, name} = req.body;
    console.log(email, password, name);

    const checkEmail = await userInfo.findOne({email})
    console.log(checkEmail);

    if(checkEmail){
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
        result : '회원가입이 완료되었습니다. 로그인해주세요'
    })

}); //signup

router.post('/login', async(req, res) =>{
    let {email, password} = req.body;

    const checkEmail = await userInfo.findOne({email});

    if(!checkEmail){
        res.status(401);
        res.json({
            fail: '존재하지 않는 이메일입니다.'
        })
        return;
    }
    

}); //login


module.exports = router;