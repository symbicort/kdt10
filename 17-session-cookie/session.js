const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8000;

app.set('view engine','ejs');
app.set('views','./views');

// 세션 옵션 객체
// secure: 값을 true로 하면 https에서만 세션을 주고 받음
// secret: 안전하게 쿠키를 전송하기 위한 쿠키 서명 값 (세션을 발급할 떄 사용되는 키)
// resave: 세션에 수정사항이 생기지 않더라도, 매 요청(req) 마다 세션을 다시 저장할 것인지, 세션을 항상 저장할 건지 지정하는 값(false 권장)
// saveUninitalized : 세셔에 저장할 내역이 없더라도 처음부터 세션을 생성할 지 설정
// httpOnly: 웹 서버를 통해서만 쿠키에 접근 가능
// maxAge: 쿠키 수명(단위 ms)
// => cookie 객체에 넣어서 정의

app.use(session({
    secret: 'mySessionSecret',
    resave: false,
    saveUninitalized: true,
    cookie: {
        httpOnly: true,
        maxAge: 60 * 1000
    }
}))

app.get('/', (req,res) => {
    res.render('session')
})

app.get('/set', (req,res) => {
    // 세션 설정 req.session.키 = 값
    req.session.name = "홍길동"; // {name: "홍길동"}
    res.send('세션 설정 완료');
})

app.get('/name', (req,res) => {
    console.log(req.session.name);
    console.log(req.sessionID);
    console.log(req.session);
    res.send({id: req.sessionID, name: req.session.name});
})

app.get('/destroy', (req,res) => {
    req.session.destroy((err) => {
        if(err) {
            console.log(err);
            res.send('failed', err);
        }
        res.redirect('/name');
    })
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})