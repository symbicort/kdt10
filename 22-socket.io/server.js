const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();

// express 앱으로 http 서버를 생성
const server = http.createServer(app);
// socket.io를 http 서버에 연결
const io = socketIO(server);
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('chat');
});

app.get('/prac', (req,res) => {
    res.render('chatBox');
})

// io.on() : socket 관련한 통신 작업을 처리
io.on('connection', (socket) => {
    // connection 이벤트는 클라이언트가 접속 했을 때 발생
    // 콜백 함수의 인자로 소켓 객체를 제공

    console.log('서버 연결 완료 >', socket.id);

    // [실습 1]
    socket.on('hello', (data) => {
        console.log(`${data.who} : ${data.msg}`);

        socket.emit('response', {who: 'hello', msg:'안녕'});
    })

    socket.on('study', (data) => {
        console.log(`${data.who} : ${data.msg}`);

        socket.emit('response', {who: `student`, msg: `공부중`});
    });

    socket.on('bye', (data) => {
        console.log(`${data.who} : ${data.msg}`);

        socket.emit('response', {who: 'student', msg: `Bye`});
    });

    // 채팅창 입장 안내 문구
    socket.on('send', (data) => {
        console.log(`writer : ${socket.id}`);
    })
    
    io.emit('notice', `${socket.id} 님이 입장하셨습니다.`);
})

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})