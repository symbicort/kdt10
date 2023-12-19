const { ListDirectoryBucketsCommand } = require('@aws-sdk/client-s3');
const marketModel = require('../model/market');
const {postUpload, deleteProfileImg} = require('./CimgUploader');
const jwt = require('jsonwebtoken');

exports.market = async (req, res) => {
    marketModel.find()
    .exec()
    .then((result) => {
        console.log('Found data:', {postData: result});
        res.render('market', {postData: result});
    }).catch((error) => {
        console.error('Error finding data:', error);
});
};

exports.getView = async (req, res) => {
    console.log(req.params);
	res.render('marketView');
};

exports.getWrite = async (req, res) => {
    const token = req.cookies.loginUser;

    if(token){
        res.render('marketWrite');
    } else{
        res.render('login')
    }
};

exports.addPost = async (req, res) => {
    // upload.array('files')를 사용하여 'files'라는 필드명으로 전송된 파일들을 처리
    postUpload.array('files')(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }   
        console.log(req.files.length);
        console.log(req.body);

        let images = [];

        for (let i = 0; i < req.files.length; i++) {
            images.push(req.files[i].location)
        }
        
        console.log(images);

        const {subject, comment, category, state, priceFirst, priceDirect, dateLimit} = req.body

        console.log('글 작성 정보', subject, comment, state, priceFirst, priceDirect, dateLimit)

        const token = req.cookies.loginUser;
        const decodedjwt = jwt.verify(token, process.env.JWT_SECRET_KEY)
        const userId = decodedjwt.userId;
        const date = new Date();
        
        await marketModel.create({
            userid: userId,
            category: category,
            state: state,
            subject: subject,
            content: comment,
            priceFirst: priceFirst,
            priceLast: priceFirst,
            priceDirect: priceDirect,
            dateLimit: dateLimit,
            images: images,
        }).then((res) => {
            console.log(userId,'이미지 등록 결과', res)
        })
        return res.status(200).json({ message: 'Upload successful' });
    });
};