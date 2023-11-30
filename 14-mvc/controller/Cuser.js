const userInfo = require('../model/user');

exports.userinfo = (req,res) => {
    console.log(userInfo.userInfos());
    res.render('user', {userinfo: userInfo.userInfos()});
}