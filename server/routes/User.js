const { Router } = require('express');
const router = Router();

router.post("/signUp", async (req, res, next) => {
    const { email, password, name } = req.body;
    console.log(email, password, name);

    let hashPassword = passwordHash(password);
    const checkEmail = await User.findOne({ email });

    if (checkEmail) {
        res.status(500);
        res.json({
            error: '이미 가입된 이메일 입니다.'
        })
        //func 빠져나가기
        return;
    }

    await User.create({
        email,
        password: hashPassword,
        name
    });

    res.json({
        result: "회원가입이 완료되었습니다. 재로그인 해주세요."
    })

});

module.exports = router;