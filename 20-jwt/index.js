const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;
const SECRET = 'ed9fdf3fcd';

const userInfo = {
    id: 'banana',
    pw: 'password'
}
app.use('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.user(express.json());

app.get('/', (req,res) => {
    res.render('index');
})

app.get('/login', (req,res) => {
    res.render('login');
})

app.post('/login', (req, res) => {
    try{
        const {id, pw} = req.body;
        const {id: realId, pw:realPw} = userInfo;

        if(id === realId && pw === realPw){
            const token = jwt.sign({id: id}, SECRET);
            res.send({isLogin: true, token });
        } else {
            res.send({isLogin: false, msg:'로그인 정보가 올바르지 않습니다'})
        }
    } catch(err){
        console.log(err);
    }
})

app.post('/token', (req,res) => {
    console.log('token > ', req.headers.authorization);
    if(req.headers.authorization){
        const authorization = req.headers.authorization.split('');
        console.log(authorization);
        const token = authorization[1];
        
        try{
            // 토큰 검증 ; jwt.verify(token.verify)
            const result = jwt.verify(token, SECRET);
            console.log('result >', result);

            if(result.id === userInfo.id){
                res.send({isVerify: true, name: userInfo.name});
            } else {
                res.send({isVerify: false});
            }
        } catch(err){
            console.log(err);
        }
    } else {
        res.redirect('/login');
    }
})

app.listen(PORT, () => {
    console.log(`http://localhost/${PORT}`);
})