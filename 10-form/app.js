const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views','views');

// 미들웨어 등록

// req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
app.use(express.urlencoded({extended:true}));

// post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json());

app.get('/',(req,res) => {
    // views 폴더 내부에 index라는 ejs파일을 보여줌
    res.render('index_prac_get');
})

app.get('/post_prac',(req,res) => {
    // views 폴더 내부에 index라는 ejs파일을 보여줌
    res.render('index_prac_post');
})

// GET '/login' 요청이 들어오면 임의의 메시지 전송
// get 방식은 클라이언트에서 보낸 데이터가 req.query에 저장
app.get('/login', (req,res) =>{
    console.log(req.query);
    res.render('result',{
        userInfo: req.query,
        title : 'get 요청'
    });
})

// post '/login' 요청이 들어오면 임의의 메시지 전송
app.post('/login', (req,res) =>{
    console.log(req.body);
    res.render('result',{
        userInfo: req.body,
        title : 'post 요청'
    });
})

app.post('/js-form-check',(req,res) => {
    console.log(req.body);
    res.render('js validation 성공');
});

app.get('/prac-get',(req,res) => {
    console.log(req.body);
    res.render('result',{
        result : req.query
    });
});

app.post('/prac-post',(req,res) => {
    console.log(req.body);
    res.render('prac_result_post',{
        result : req.body
    });
});

app.listen(PORT,function(){
    console.log(`${PORT} is opening`);
});