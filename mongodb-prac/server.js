const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const connect = require('./model/index');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
dotenv.config();


const app = express();
const PORT = 8000;


app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use('/utils', express.static(__dirname + '/utils'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

const userRouter = require('./routes/user');
app.use('/user', userRouter);

const marketRouter = require('./routes/market');
app.use('/', marketRouter);  

app.get('*', (req, res) => {
    res.render('404');
})

connect();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

