const userModel = require('../model/user');
const { hashPW, comparePW } = require('../utils/crypto');
const {upload, deleteProfileImg} = require('./CimgUploader');
const { makeToken, makeRefreshToken, verifyToken } = require('../utils/token')

exports.main = async (req, res) => {
    const token = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;

    if(!token){
        res.render('main', {userid: undefined});
    } else{
        try{
            const decodedjwt = await verifyToken(token, refreshToken) ;

            if(decodedjwt.token != undefined){
                res.render('main', {userid: decodedjwt.userid});
            } else{
                alert('재 로그인을 진행해주세요');
                res.render('login');
            }
            
        } catch(err) {
            console.error('메인 페이지 랜딩 에러', err);
        }
    }
}

exports.view_signup = (req,res) => {
    res.render('signup');
}

exports.view_login = (req, res) => {
    res.render('login');
}

exports.view_profile = async (req,res) => {
    try{
        const token = req.cookies.accessToken;
        const reftoken = req.cookies.refreshToken;
        const decodedjwt = await verifyToken(token, reftoken) ;

        if(decodedjwt.token == undefined){
            alert('재 로그인을 진행해주세요');
            res.render('login');
        } else {
            const user_id = decodedjwt.userid;

            const user = await userModel.findOne({ userid: user_id }).exec();

            console.log('user 정보', user);
            const userid = user.userid;
            const username = user.nick;
            const address = user.address;
            const image = user.image;

            res.render('profile', {userid, username, address, image})
        }
    } catch(err) {
        console.error(err);
    }
}

exports.signup = async (req,res) => {
    try{
        const {userid, userpw, nickname, address} = req.body;
        const User_pw = hashPW(userpw);
        await userModel.create({
            userid: userid,
            pw : User_pw,
            nick: nickname,
            address: address,
            image: ''
        }).then((newUser) => {
            console.log(newUser);
            res.send(newUser);
        })
    } catch (err) {
        console.error('유저 생성 중 오류', err.code);
        if(err.code == 11000){
            res.send({existUser: true});
        } else{
            res.send({existUser: false});
        }
    }
}

exports.login = async (req, res) => {
    console.log(req.body);
    try {
        const { userid, userpw } = req.body;
        console.log(userid, userpw);
        const user = await userModel.findOne({ userid: userid }).exec();

        console.log('Users:', user);

        if (user) { 
            const isPasswordMatch = comparePW(userpw, user.pw);
            console.log(isPasswordMatch);

            if (isPasswordMatch) {
                const token = makeToken(userid);
                const refreshToken = makeRefreshToken(userid);
                console.log('토큰 생성 정보', token, refreshToken)
                res.cookie('accessToken', token, { maxAge: 7200000, httpOnly: true });
                res.cookie('refreshToken', refreshToken, { maxAge: 604800000, httpOnly: true });
                res.send({ result: true });
            } else {
                res.send({ result: false });
            }
        } else {
            res.send({ result: false });
        }
    } catch (err) {
        console.error(err);
    }
};

exports.user_edit = async (req,res) => {
    try{
        const {id, pw, name, addr} = req.body;
        console.log(id, pw, name, addr);
        const encrypw = hashPW(pw);

        const editUser = await userModel.updateOne({userid:id}, {pw: encrypw, nick: name, address: addr});

        console.log('유저 수정 요청 정보', editUser.acknowledged);
        if(editUser.acknowledged) {
            res.send({editSuccess:true});
        } else{
            res.send({editSuccess:false});
        }
    } catch(err){
        console.error(err);
    }
}

exports.user_delete = async (req,res) => {
    console.log(req.body);
    try{
        const {userid} = req.body;
        const deleteUser = await userModel.deleteOne({userid: userid});

        console.log(deleteUser);
        if(deleteUser.deletedCount == 1 == 1){
            res.send({result: '유저 삭제 성공'});
        } else{
            res.send({result: '잘못된 요청'});
        }
    } catch(err){
        console.log(err);
    }
}


exports.ImageUpload = async (req, res) => {
    await upload.array('files')(req, res, (err) => {
        if (err) {
            console.error('Error uploading files:', err);
            return res.status(500).send('Error uploading files');
        }
        console.log('파일 등록 req', req.files.location);
        res.send(req.files);
    });  
};

exports.profile_image_edit = (req, res) => {
    console.log('요청 데이터', req.body);
    const {user_id, uploadImgurl, currentImgsrc} = req.body;
    userModel.updateOne({ userid: user_id }, { $set: { image: uploadImgurl } }, (err, result) => {
        if (err) {
            console.error('이미지 업데이트 에러', err);
            res.status(500).send('이미지 업데이트 중 에러 발생');
        } else {
            deleteProfileImg(process.env.AWS_S3_BUCKET_PROFILE, currentImgsrc);
            res.send('이미지 업데이트 성공');
        }
    });
};