const { Router } = require('express');
const { User } = require('../models');
const router = Router();

router.post('/signup', async (req, res) => {

    try {
        const { email, password, name } = req.body;
        console.log(email, password, name);

        const checkEmail = await User.findOne({ email })
        console.log(checkEmail);

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
            result: '회원가입이 완료되었습니다. 로그인해주세요'
        })
    } catch (e) {
        throw new Error(e)
    }


}); //signup

router.post('/login', async (req, res) => {

    try {

        let { email, password } = req.body;

        const checkEmail = await User.findOne({ email });

        if (!checkEmail) {
            res.status(401);
            res.json({
                fail: '존재하지 않는 이메일입니다.'
            })
            return;
        }

        if (password !== checkEmail.password) {
            res.status(401);
            res.json({
                fail: "비밀번호가 틀렸습니다."
            })
            return;
        }

    } catch (e) {
        throw new Error(e)
    }



}); //login


module.exports = router;