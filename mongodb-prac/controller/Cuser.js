const userModel = require('../model/user');
const { hashPW, comparePW } = require('../utils/crypto');
const jwt = require('jsonwebtoken');

exports.main = (req, res) => {
    console.log('req.cookie', req.cookie)
    const token = req.cookies.loginUser;
    console.log(token);
    if(!token){
        res.render('user', {userid: undefined});
    } else{
        try{
            const decodedjwt = jwt.verify(token, process.env.JWT_SECRET_KEY)

            const userId = decodedjwt.userId;

            res.render('main', {userid: userId});
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
        const token = req.cookies.loginUser;
        const decodedjwt = jwt.verify(token, process.env.JWT_SECRET_KEY)
        console.log(decodedjwt);
        const userId = decodedjwt.userId;

        const user = await userModel.create({
            
        })

        const userid = user.User_id;
        const username = user.User_name;

        res.render('profile', {userid, username})

    } catch(err) {
        console.error('프로필 패이지 랜딩 에러', err);
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
            address: address
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
            const isPasswordMatch = await comparePW(userpw, user.pw);
            console.log(isPasswordMatch);

            if (isPasswordMatch) {
                const token = jwt.sign({ userId: userid }, process.env.JWT_SECRET_KEY, { expiresIn: '2h' });
                console.log(token);
                res.cookie('loginUser', token, { maxAge: 7200000, httpOnly: true });
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
        const {userid, pw, name} = req.body;
        const encrypw = hashPW(pw);

        const editUser = await UserModel.update({User_pw: encrypw, User_name: name}, {where:{User_id:userid}});

        if(editUser) {
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
        const deleteUser = await UserModel.destroy({where: {User_id: userid}});

        if(deleteUser == 1){
            res.send({result: '유저 삭제 성공'});
        }
    } catch(err){
        console.log(err);
    }
}
