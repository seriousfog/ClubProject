const {sequelize} = require('../models/index');
const {QueryTypes} = require('sequelize');
const {clubInfo} = require('../models/index');

module.exports.homeRoute = async function (req, res, next) {
    let clubinfos = await sequelize.query('select * from clubinfos', {type: QueryTypes.SELECT});
    res.render('index', {clubinfos});
}