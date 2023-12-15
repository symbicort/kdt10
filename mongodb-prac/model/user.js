const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    userid: {
        type: String,
      // notnull이나 유니크 인덱스 같은건 원래 몽고디비에는 해당 설정이 없음. 
      // 몽구스에서 sql처럼 표현하기 위해 추가된 것!
      required: true, // null 여부
      unique: true, // 유니크 여부
    },
    pw: {
        type: String, // Int32가 아니다. 기본 자바스크립트에는 존재하지 않으니 넘버로 해줘야 한다.
        required: true,
    },
    nick: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    image:String
});

module.exports = mongoose.model('User', userSchema);