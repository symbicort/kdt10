const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

app.set('view engine','ejs');
app.set('views','./views');

// cookie-parser

// 일반 쿠키
// app.use(cookieParser());

// 암호화 쿠키
app.use(cookieParser('mySecretKey'));
// secretKey : 비밀키
// - 서명된 쿠키가 있는 경우, 제공한 비밀키를 가지고 해당 쿠키가 내 서버가 만든 쿠키임을 인증 가능
// - 쿠키는 클라이언트에서 위조가 쉬우므로, 비밀키를 통해 만든 서명을 쿠키 값 뒤에 붙임
//  - 서명된 쿠키는 req.cookies -> req.signedCookies 객체에 들어있음

// cookie 옵션 객체
const cookieConfig = {
    // httpOnly ; 웹 서버를 통해서만 쿠키에 접근 가능
    // maxAge: 쿠키의 수명, 단위는 ms
    // expires : 만료 날짜를 GMT 시간대로 설정
    // path: 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화되고, 웹 브라우저는 해당하는 쿠키만 웹 서버에 전송(기본값: /)
    // domain: 쿠키가 전송될 도메인 특정 가능(기본값: 현재 도메인)
    // secure: 웹 브라우저와 웹 서버와 http로 통신하는 경우에만 쿠키를 서버로 전송
    // signed : 쿠키의 암호화 결정(req.signedcookies 객체에 들어있음)
    httpOnly : true,
    maxAge: 60 * 1000, // 1분
    signed: true,
}

app.get('/', (req, res) => {
    res.render('cookie');
})

app.get('/setCookie', (req, res) => {
    res.cookie('myCookie','myvalue', cookieConfig);
    res.send('set cookie');
})

app.get('/getCookie', (req, res) => {
    // res.send(req.cookies);
    res.send(req.signedCookies)
})

app.get('/clearCookie', (req,res) => {
    res.clearCookie('myCookie','myvalue', cookieConfig);
    res.send('clear cookie');
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})