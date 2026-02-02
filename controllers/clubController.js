const {clubInfo} = require('../models');

module.exports.displayclubInfos = async function(req, res){
    const clubinfos = await clubInfo.findAll();
    res.render('index', {clubinfos});
}