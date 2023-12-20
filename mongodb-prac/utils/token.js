import token from '../model/token';

const tokenModel = require('../model/token');
const jwt = require('jsonwebtoken');

const makeToken = (userid) => {
    const token = jwt.sign({userId: userid}, process.env.JWT_SECRET_KEY, { expiresIn: "2h" });
    return token;
};

const makeRefreshToken = async (userid) => {
    try {
        const refreshToken = jwt.sign({}, process.env.JWT_SECRET_KEY, {
            algorithm: "HS256",
            expiresIn: "7d",
        });

        const result = await tokenModel.updateOne(
            { user_id: userid },
            { user_id: userid, refreshToken: refreshToken },
            { upsert: true }
        )

        console.log('make refresh token complete', result);

        return {makeRefreshToken: success}
    } catch (error) {
        console.error('upload to token db error', error);
        throw error; // 또는 다른 처리 방식을 선택할 수 있습니다.
    }
};

// 엑세스 토큰 만료 여부 확인
const verifyToken = async (token, userid) => {
    try{
        const verify = jwt.verify(token,process.env.JWT_SECRET_KEY);

        return {accessTokenverify: true}
    } catch(err) {
        if(err.name === 'TokenExpiredError'){
            const refreshToken = await verifyRefreshToken(userid);

            if(refreshToken.refreshTokenVerify || refreshToken.makeRefreshToken){
                return {accessTokenverify: true}
            }
        }
        console.error('verify error', err);
    }
}

const verifyRefreshToken = async (userid) => {
    try{
        const token = await tokenModel.findOne({ user_id: userid }).exec();

        const verify = jwt.verify(token.refreshToken, process.env.JWT_SECRET_KEY);

        console.log('refresh 토큰 verify 성공', verify);

        return {refreshTokenVerify: true , makeRefreshToken: false}
    } catch(err){
        if(err.name === 'TokenExpiredError'){
            const newToken = await makeRefreshToken(userid);

            console.log(newToken.makeRefreshToken);

            return {refreshTokenVerify: false , makeRefreshToken: true} 
        }
        console.error('verifyRefresh token err', err);
    }
}

export { makeToken, makeRefreshToken, verifyToken }