const user = require('../model/user');

// GET /
exports.main = (req, res) => {
    res.render('user');
}

exports.viewSignup = (req, res) => {
    res.render('signup');
}

exports.viewSignin = (req, res) => {
    res.render('signin');
}

exports.viewProfile = (req, res) => {
    res.render('profile');
}

exports.signup = (req, res) => {
    console.log(req.body);
    const {userid, name, password} = req.body;
    user.signup(req.body, (result) => {
        console.log(result);
        res.send({userinfo: userid, name, password});
    })
}

exports.signin = (req, res) => {
    console.log(req.body);
    const {userid, password} = req.body;
    user.signin(req.body, (result) => {
        console.log('result', result);
        res.send(result);
    })
}

exports.edit_profile = (req,res) => {
    console.log('patch profile', req.body);
    user.editProfile(req.body, (result) => {
        console.log('edit profile', result);
        res.send(result);
    })
}

exports.delete_profile = (req, res) => {
    console.log('delete profile', req.body);
    user.deleteProfile(req.body, (result) => {
        console.log('delete profile rslt', result);
        res.send(result);
    })
}

