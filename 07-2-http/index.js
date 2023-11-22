// http 모듈로 웹 서버 생성

const http = require('http');
const fs = require('fs'); // 파일 관련 내장 모듈
const server = http.createServer(function(req,res) {
    // req: request 객체 (클라이언트에서 서버로 들어온 요청)
    // res: response 객체 (서버에서 클라이언트로 보내는 응답)

    // 응답 head, 본문, end 를 지정
    // res.writeHead(200,{'content-type' : 'text/html;    charset=utf8'}) //응답 헤더
    // res.write('<h1>hello, node.js</h1>'); //응답 본문
    // res.end('<p>my first node server</p>'); //응답 종료
    // // 위에 코드는 localhost:8000 접속 시 일어남

    try {
    const data = fs.readFileSync('./inde.html');
    res.writeHead(200, {'content-type' : 'text/html; charset=utf8'});
    res.write(data);
    res.end();
    } catch(error){
        const err = fs.readFileSync('./404.html');
        // res.writeHead(404, {'content-type' : 'text/html; charset=utf8'  });
        res.write(err);
        res.end();
        console.log(error)
    }
});
const Port = 8000;

// request : 이벤트: 클라이언트 요청
server.on('request', function(req, res) {
    console.log('request 이벤트 발생', req.url)
})

server.on('connection', function(req,res){
    console.log('connection 이벤트 발생!')
})

server.listen(Port, function() {
    console.log(`server listening on ${Port}`);
})

// setTimeout(function(){
//     console.log('10초가 지나서 서버 종료');
//     server.close();
// },10000);

// 10초 후 서버 종료