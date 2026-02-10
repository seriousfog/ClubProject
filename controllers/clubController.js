const {sequelize} = require("../models/index");
const {QueryTypes} = require('sequelize');
const {clubInfo} = require("../models/index");

module.exports.homeRoute = async function(req, res,next) {
    let clubInfos = await clubInfo.findAll();
    res.render('test', {clubInfos});
}