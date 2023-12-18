const marketModel = require('../model/market');
const {upload, deleteProfileImg} = require('./CimgUploader');


exports.market = (req, res) => {
	res.render('market');
};

exports.getView = (req, res) => {
	res.render('marketView');
};

exports.getWrite = (req, res) => {
	res.render('marketWrite');
};
