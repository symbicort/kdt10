const express = require('express');
const path = require('path')
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// (임시) DB로부터 받아온 데이터 댓글 목록
const comments = [
    {
        id: 1,
        userid: 'helloword',
        date: '2022-10-31',
        comment: '안녕하세요'
    },
    {
        id: 2,
        userid: 'he',
        date: '2021-1-31',
        comment: 'hello'
    },
    {
        id: 3,
        userid: 'hello',
        date: '2022-9-31',
        comment: 'welcome'
    },
    {
        id: 4,
        userid: 'word',
        date: '2023-10-31',
        comment: 'hello world'
    }
]

const userInfo = [
    {
        realId: 'helloword',
        realPw: 'word1234',
        name: 'hello',
        age: 21
    }
]

// mvc 적용 전에는 app.js에서 라우트 정의
// 단점 : 라우터가 많아질 경우 app.js코드가 길어짐 => 유지보수성 하락
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/comments', (req,res) => {
    console.log('comments');
    res.render('comments', {commentInfos: comments});
})

app.get('/comment/:id', (req,res) => {
    console.log(req.params);
    console.log('id > ', req.params.id);

    const commentId = req.params.id; // 댓글 id : url로 들어온 매개변수
    console.log(comments[commentId-1]);
    
    if(commentId < 1 || commentId > comments.length){
        return res.render('404');
    }

    console.log(typeof commentId);

    if(isNaN(commentId)){
        return res.render('404');
    }

    res.render('comment',{ commentInfo: comments[commentId - 1]})
});

app.get('/user', (req,res) => {
    res.render('user', {userInfo})
});

app.get('*',(req,res) => {
    res.render('404');
});



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});