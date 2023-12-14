const userModel = require('../model/user');
const { hashPW, comparePW } = require('../utils/crypto');
const jwt = require('jsonwebtoken');

exports.main = async (req, res) => {
    await userModel.createCollections();
    res.render('main'); 
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

        const user = await UserModel.findOne({
            where: { User_id: userId }
        });

        const userid = user.User_id;
        const username = user.User_name;

        res.render('profile', {userid, username})

    } catch(err) {
        console.error('프로필 패이지 랜딩 에러', err);
    }
}

exports.signup = async (req,res) => {
    console.log(req.body);
    try{
        const { User_id, user_pw, User_name} = req.body;
        const User_pw = hashPW(user_pw);
        const newUser = await UserModel.create({
            User_id,
            User_pw,
            User_name
        });
        console.log(newUser);
        res.send(newUser);
    } catch (err) {
        console.error('유저 생성 중 오류', err);
    }
}



exports.login = async (req,res) => {
    console.log(req.body);
    try{
        const {userid, userpw} = req.body;
        const user = await UserModel.findOne({
            where: { User_id: userid }
        });
        
        if (user) {
            const inputPassword = userpw;
            const isPasswordMatch = await comparePW(inputPassword, user.User_pw);

            if (isPasswordMatch) {
                const token = jwt.sign({userId: userid}, process.env.JWT_SECRET_KEY, {expiresIn: '2h'});
                console.log(token);
                res.cookie('loginUser', token, {maxAge: 7200000, httpOnly: true})
                res.send({result: true});
            } else {
                res.send({result:false});
                }
        } else {
            res.send({result:false});
        }
    } catch (err){
        console.error(err)
    }
    
}

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
