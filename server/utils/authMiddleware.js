const jwt = require('jsonwebtoken');
const jwtConfig = require('./../config/jwtConfig');

module.exports = async (req, res, next) => {
    const accessToken = req.header('accessToken'); 
    if (accessToken === null || accessToken === undefined) { 
        res.status(403).json({ success: false, errormessage: 'Authentication fail' });
    } else {
        try {
            const tokenInfo = await new Promise((resolve, reject) => {
                jwt.verify(accessToken, jwtConfig.secret,
                    (err, decoded) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(decoded);
                        }
                    });
            });
            req.tokenInfo = tokenInfo;
            next();
        } catch (err) {
            console.log(err);
            res.status(403).json({ success: false, errormessage: 'Authentication fail' }); 
        }
    }
}