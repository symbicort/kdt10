const mongoose = require('mongoose');
const { Schema } = mongoose;

const marketSchema = new Schema({
    userid: {
        type: String,
        // required: true, // null 여부
        // unique: true, // 유니크 여부
    },
    category: {
        type: String, // Int32가 아니다. 기본 자바스크립트에는 존재하지 않으니 넘버로 해줘야 한다.
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    priceFirst: {
        type: Number,
        required: true
    },
    priceLast:{
        type: Number
    },
    priceDirect:{
        type: Number,
        required: true
    },
    dateLimit:{
        type: Date,
        required: true
    },
    complete_stat: {
        type: Number,
        required: true,
        default: 1
    },
    bookmark_hit: {
        type: Number,
        required: true,
        default: 0
    },
    image1: {
        type: String
    },
    image2: {
        type: String
    },
    image3: {
        type: String
    },
    image4: {
        type: String
    },
    image5: {
        type: String
    },
    createAt: {
        type: Date
    },
    updateAt: {
        type: Date
    }
});

module.exports = mongoose.model('market', marketSchema);