const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine','ejs');
// app.set('views','/views');
app.set('/views','views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res) => {
    // views 폴더 내부에 index라는 ejs파일을 보여줌
    res.render('index');
})

app.get('/prac',(req,res) => {
    // views 폴더 내부에 index라는 ejs파일을 보여줌
    res.render('signInForm');
})

app.get('/ajax',(req,res) => {
    // views 폴더 내부에 index라는 ejs파일을 보여줌
    console.log(req.query);
    res.send(req.query);
})

app.post('/ajax',(req,res) => {
    // views 폴더 내부에 index라는 ejs파일을 보여줌
    console.log(req.body);
    res.send(req.body);
})

app.get('/axios',(req,res) => {
    // views 폴더 내부에 index라는 ejs파일을 보여줌
    console.log(req.query);
    res.send(req.query);
})

app.post('/axios',(req,res) => {
    // views 폴더 내부에 index라는 ejs파일을 보여줌
    console.log(req.body);
    res.send(req.body);
})

app.get('/fetch',(req,res) => {
    console.log(req.query);
    res.send(req.query);
})

app.get('/axioss', (req, res) => {
    const resultData = {
        query: req.query,
    };

    // res.render 함수의 두 번째 인자로 데이터를 전달
    res.render('result', { result: resultData });
});



app.listen(PORT, () => {
    console.log(`server is opened by ${PORT}`);
})