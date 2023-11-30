const express = require('express');
const router = express.Router();
// controller 파일
const controller = require('../controller/Cmain');
const loginController = require('../controller/Clogin');

// index.js => localhost:PORT/

/*
// (임시) DB로부터 받아온 데이터 댓글 목록
const comments = [
    {
        id: 1,
        userid: 'helloword',
        date: '2022-10-31',
        comment: '안녕하세요~'
    },
    {
        id: 2,
        userid: 'hello',
        date: '2022-11-31',
        comment: '반가워요'
    },
    {
        id: 3,
        userid: 'apple',
        date: '2023-3-31',
        comment: '오 신기하다'
    },
    {
        id: 4,
        userid: 'best',
        date: '2023-4-31',
        comment: '댓글 적기~'
    },
]

// [Before] MVC 적용 전에는 app.js에서 라우트 정의
// 단점: 라우터(경로)가 많아진다면? app.js 코드가 길어짐 -> 유지보수성 하락

// GET /
router.get('/', (req, res) => {
    res.render('index');
})

// GET /comments
router.get('/comments', (req, res) => {
    console.log(comments); // [{}, {}, {}, {}]
    res.render('comments', { commentInfos: comments });
})

// GET /comment/:id
router.get('/comment/:id', (req, res) => {
    // req.query : /comment?id=1
    console.log(req.params); // { id: '1' } : 라우트 매개변수에 대한 정보가 담겨 있음
    console.log('id >', req.params.id);

    const commentId = req.params.id; // 댓글 id: url로 들어온 매개변수
    console.log(comments[commentId - 1]);

    // 존재하지 않는 댓글 id 접속시 404 페이지
    if (commentId < 1 || commentId > comments.length) {
        return res.render('404');
    }

    console.log(typeof commentId); // string

    // :id 변수에 숫자가 아닌 값이 온다면 404 페이지
    if (isNaN(commentId)) {
        return res.render('404');
    }

    res.render('comment', { commentInfo: comments[commentId - 1] });
})
*/

// Controller 연결
// 경로를 컨트롤러와 연결지어 사용 가능
router.get('/', controller.main);
router.get('/comments', controller.comments);
router.get('/comment/:id', controller.comment);
router.get('/login', loginController.login);
router.post('/login', loginController.authlogin);

// module.exports를 통해서 router를 등록해줘야 다른 모듈에서 사용 가능함
module.exports = router;