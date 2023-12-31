const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// [라우터 분리]
const indexRouter = require('./routes/index');
app.use('/', indexRouter); // localhost:PORT/

const userRouter = require('./routes/user');
app.use('/user', userRouter); // localhost:PORT/

// [404 error] 맨 마지막 라우트로 선언
app.get('*', (req, res) => {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})