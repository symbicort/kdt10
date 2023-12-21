const tokenModel = require('../model/token');
const jwt = require('jsonwebtoken');

const makeToken = (userid) => {
    const token = jwt.sign({userId: userid}, process.env.JWT_SECRET_KEY, { expiresIn: "1m" });
    return token;
};

const makeRefreshToken = (userid) => {
    try {
        const refreshToken = jwt.sign({refreshToken: 'refreshToken'}, process.env.JWT_SECRET_KEY, {
            algorithm: "HS256",
            expiresIn: "7d",
        });

        const result = tokenModel.updateOne(
            { user_id: userid },
            { user_id: userid, refreshToken: refreshToken },
            { upsert: true }
        )

        console.log('make refresh token complete', result);

        return {makeRefreshToken: true}
    } catch (error) {
        console.error('upload to token db error', error);
        throw error; // 또는 다른 처리 방식을 선택할 수 있습니다.
    }
};

// 엑세스 토큰 만료 여부 확인
const verifyToken = async (accessToken, refToken) => {
    console.log('function verifyToken', accessToken, refToken)
    try{
        const verify = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);

        console.log('액세스 토큰 유효 정보', verify);

        return {accessTokenverify: true, userid: verify.userId}
    } catch(err) {
        if(err.name === 'TokenExpiredError'){
            const user = await tokenModel.findOne({refreshToken: refToken})

            console.log('리프레시 토큰 검색 결과', user)
            const refreshToken = await verifyRefreshToken(userid);
            console.log('리프레시 토큰 유효성 조회', refreshToken)

            if(refreshToken.refreshTokenVerify){
                return makeToken(userid)
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

        return true
    } catch(err){
        if(err.name === 'TokenExpiredError'){
            return false 
        }
        console.error('verifyRefresh token err', err);
    }
}

module.exports = { makeToken, makeRefreshToken, verifyToken }; 