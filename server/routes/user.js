const { Router } = require('express');
const { User } = require('../models');
const router = Router();
const cryto = require("crypto");
const jwtConfig = require('./../config/jwtConfig')
const jwt = require('jsonwebtoken');
const nodeMailer = require('nodemailer'); 


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
        console.log('회원가입에 실패하셨습니다.')
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

//비밀번호 찾기

router.post("/findPassword", async(req, res) =>{
   try{
    let { email } = req.body;
    let user = await User.findOne({email});

    let myEmail = "";

    let transporter = nodeMailer.createTransport({
        service: 'gmail',
        host: 'stmp.gmail.com',
        port: 587,
        secure: false,
        auth:{
            user: myEmail,
            pass:" "
        }
    })

    const randomPassword = randomPw();
    const hashRandomPassword = passwordHash(randomPassword);

    await User.findOneAndUpdate({shortId: user.shortId}, {
        password: hashRandomPassword,
        status: true
    });

    let info = await transporter.sendMail({
        from: `"니은팀" <${myEmail}>`,
        to: user.email,
        subject: '임시 비밀번호 안내해드립니다.',
        html: `<b>초기화 비밀번호: ${randomPassword}</b>`
    });

    console.log(info.messsageId);
    res.json({ result: "이메일을 전송하였습니다." })
   }catch(e){
    throw new Error(e);

   }

});

// 비밀번호 update 하기
router.post('/:shortId/update', async(req, res) =>{
    
    let {shortId} = req.params;
    let {password} = req.body;

    try{
        await User.updateOne({shortId},{
            password
        });

        res.json({
            result : "수정이 완료되었습니다."
        })
    }catch(e){
        throw new Error(e);
    }

});


const randomPw = () =>{
    return Math.floor(Math.random()*(10**8)).toString().padStart('0',8);
}

// password hash
const hashPassword = (password) => {
    return cryto.createHash('sha1').update(password).digest('hex');
}

module.exports = router;