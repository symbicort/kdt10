const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 8000;
const db = require('./models/index');

const server = http.createServer(app);
const io = SocketIO(server);

dotenv.config();

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const userRouter = require('./routes/user');
app.use('/user', userRouter); // localhost:PORT/

// const chatRouter = require('./routes/chat');
// app.user('./chat', chatRouter);

app.use('/', (req,res) => {
    res.render('index');
});

// [404 error] 맨 마지막 라우트로 선언
app.get('*', (req, res) => {
    res.render('404');
})

db.sequelize.sync({ force: false }).then(() => {

    // force: false => 테이블이 없으면 생성
    // force: true => 테이블 무조건 생성 (만약 DB가 있다면 다 삭제하고 다시 생성 -> prod에서 사용 X)
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    })
}).catch((err) => {
    console.log(err);
})