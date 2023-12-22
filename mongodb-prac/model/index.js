const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect(process.env.mongodb_connect_url, {
        dbName: 'jumbbang_data',
    })
        .then(() => {
            console.log('몽고디비 연결 성공');
        })
        .catch((error) => {
            console.log('몽고디비 연결 에러', error);
        });
    
};

mongoose.connection.on('error', (error) => {
    console.error('몽고디비 연결 에러', error);
});

mongoose.connection.on('disconnected', () => {
    console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
    connect(); // 연결 재시도
});

module.exports = connect;