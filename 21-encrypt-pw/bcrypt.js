// bcrypt
// 비밀번호 암호화하는 알고리즘 중 하나
// 주로 강력한 보안 필요할 때 사용
// : blowfish 암호를 기반으로 설계된 단방향 암호화 함수

const bcrypt = require('bcrypt');

const saltRounds = 10;

// 1. 비밀번호 해싱 함수
function hashPW(password) {
    return bcrypt.hashSync(password, saltRounds); // salt를 자동으로 생성
}

// 2. 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인하는 함수(같은지, 다른지만 알려줌)
function comparePW(password, hashedPW){
    return bcrypt.compareSync(password, hashedPW)
}
