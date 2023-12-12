const express = require('express');
const ws = require('ws');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/' , (req,res) => {
    res.render('client');
})

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});


// express 서버와 웹 소켓 서버를 연결(같은 포트를 공유)
const wsServer = new ws.Server({server: server})

const sockets = [] // 클라이언트 소켓들을 지정할 배열

wsServer.on("connection", (socket) => {
    console.log('[client connect succwess]');
    sockets.push(socket);

    sockets.on('message', (message) => {
        console.log('클라이언트로부터 받은 메세지 >', message);

        // 웹 소켓 서버에 접속한 모든 클라이언트에게 메세지 전송
        //  = 브로드캐스팅
        sockets.forEach((socket) => {
            socket.send(`${message}`);
        })
    })

    sockets.on('error', (error) => {
        console.log('에러 발생 - error');
    })

    sockets.on('close', (error) => {
        console.log('[client connect close]');
    })
})

