const member = require('../model/login');

exports.login = (req,res) => {
    res.render('login');
}

exports.authlogin = (req,res) => {
    const inputid = req.body.inputid;
    const inputpw = req.body.inputpw;
    const members = member.signmember();
    for(let i = 0; i < members.length; i++){
        if(members[i].id == inputid && members[i].pw == inputpw){
            res.send({isSuccess: true});
            console.log('로그인 검사 완료');
            break;
        } else {
            res.send({isSuccess: false});
            console.log('로그인 검사 완료');
        }
    }
}
