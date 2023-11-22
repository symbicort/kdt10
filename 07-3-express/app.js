const express = require('express');
const app = express();
const PORT = 8000;

// express에 사용할 템플릿 엔진 종류를 ejs로 등록
app.set('view engine','ejs');
// 템플릿 엔진 파일을 저장할 위치
app.set('views','./views');

// static 미들웨어 등록(정적 파일 로드 ex. css,js)
app.use('/static', express.static(__dirname + '/static'));
console.log(__dirname);  //07-3 express

// app.get(경로, 해당 경로로 들어왔을 때 실행할 함수)
app.get('/', function(req,res){
    // res.send('<h1>hello Express</h1>');

    // index라는 파일명을 찾아서 해당 파일 렌더
    res.render("index");
})

app.get('/kdt', function(req,res){
    res.send('<h1>hello Expresddds</h1>');
})

app.listen(PORT, function(){
    console.log(`server listening on ${PORT}`);
})