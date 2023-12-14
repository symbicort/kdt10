const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const {connectToDatabase} = require('./utils/db_connect');

dotenv.config();

const app = express();
const PORT = 8000;


app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use('/utils', express.static(__dirname + '/utils'));

const userRouter = require('./routes/user');
app.use('/user', userRouter);

app.get('*', (req, res) => {
    res.render('404');
})

connectToDatabase()
    .then(() => {

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
    }).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);

});

