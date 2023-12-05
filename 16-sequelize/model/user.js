const mysql = require('mysql2');

// DB 연결
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'user',
    password: 'user1234',
    database: 'kdt',
})

exports.signup = (data, cb) => {
    console.log('signup_data >', data);

    const sql = 'INSERT INTO user (userid, name, pw) VALUES ( ? , ? , ? )';
    const values = [data.userid, data.name, data.pw];
    conn.query(sql, values, (err, rows) => {
        if (err) throw err;

        cb(rows); // 콜백함수 호출, 매개변수로 3 이라는 값
    })
}

exports.signin = (data, cb) => {
    console.log('signin_data >', data);

    const sql = 'SELECT * FROM user WHERE userid = ? AND pw = ?';
    const values = [data.userid, data.pw];
    conn.query(sql, values, (err, rows) => {
        if (err) throw err;

        console.log('쿼리 결과 반환', rows);

        if (rows.length > 0) {
            cb({checklogin : true})
            // 여기에서 결과를 사용하거나 다른 로직을 수행할 수 있습니다.
        } else {
            cb({checklogin : false})
        }
    })
}

exports.editProfile = (data, cb) => {
    console.log('edit data', data);
    const sql = 'update user set pw = ?, name = ? where userid = ?';
    const values = [data.pw, data.name, data.userid];
    conn.query(sql, values, (err, rows) => {
        if (err) throw err;

        console.log('실행 결과', rows.affectedRows);
        
        cb({result: '정보 수정 성공'});
    })
}

exports.deleteProfile = (data, cb) => {
    console.log('delete usernane', data);
    const sql = 'delete from user where userid = ?';
    const values = [data.userid];
    conn.query(sql, values, (err, rows) => {
        if (err) throw err;

        console.log('실행 결과', rows);
        
        cb({result: '회원 탈퇴 성공'});
    })
}
