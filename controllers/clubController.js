const {sequelize} = require("../routes/index");
const {QueryTypes} = require('sequelize');
const {clubInfo} = require("../routes/index");

module.exports.homeRoute = async function(req, res,next) {
    let clubInfos = await clubInfo.findAll();
    res.render('test', {clubInfos});
}