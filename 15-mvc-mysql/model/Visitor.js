// exports.getVisitors = () => {
//     return [
//         { id: 1, name: '홍길동', comment: '내가 왔다.' },
//         { id: 2, name: '이찬혁', comment: '으라차차' }
//     ]
// }

// ---- mysql 연결 -----
const mysql = require('mysql2');

// DB 연결
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'user',
    password: 'user1234',
    database: 'kdt',
})

exports.getVisitors = (cb) => {
    conn.query(`SELECT * FROM visitor`, (err, rows) => {
        if (err) throw err;

        console.log('Visitor.js >', rows);
        /**
         * [
            { id: 1, name: '홍길동', comment: '내가 왔다.' },   
            { id: 2, name: '이찬혁', comment: '으라차차' }      ]
         */
        cb(rows);
    })
}

exports.postVisitor = (data, cb) => {
    console.log('postVisitor >', data);

    /**
     * Prepared Statements
     * SQL 쿼리에서 사용자 입력을 안전하게 처리하고 SQL 인젝션 공격을
     * 방지하기 위한 방법
     * 입력 데이터를 직접 문자열로 쿼리에 삽입하는 대신,
     * 플레이스홀더 사용하여 쿼리 작성
     * mysql 에서는 ? (물음표) 사용
     */
    const sql = 'INSERT INTO visitor (name, comment) VALUES ( ? , ? )';
    const values = [data.name, data.comment];
    conn.query(sql, values, (err, rows) => {
        if (err) throw err;

        console.log('Visitor.js >', rows);
        // ResultSetHeader {
        //     fieldCount: 0,
        //     affectedRows: 1,
        //     insertId: 3,
        //     info: '',
        //     serverStatus: 2,
        //     warningStatus: 0,
        //     changedRows: 0
        // }
        cb(rows.insertId);
    })
}