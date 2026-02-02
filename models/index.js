'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

var express = require('express');
var router = express.Router();
const clubController = require('../controllers/clubController');
router.get('/', clubController.displayclubInfos);
module.exports = router;

router.get('/', async function(req, res, next) {
  const {sequelize} = require("../models/index");
  const {QueryTypes} = require("sequelize");

  let clubInfo = await sequelize.query('SELECT * FROM clubinfos', {type: QueryTypes.SELECT});
  res.render('index', {clubInfo});
});

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

const express = require('express');
const {Pool} = require("pg");
const app = express();
const dotenv = require ('dotenv').config();
const cors = rqeuire('cors');

app.use(cors());
app.use(express.json());

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    require: true,
  }
})

app.get("/", async (req, res) => {
  const client = await pool.connect();

  try {

      const result = await client.query("SELECT * FROM clubinfos")
      res.json(result.rows);

  } catch (errors) {
      console.log(errors);
  } finally {
    client.release();
  }

  res.status("404");

})

app.listen(3001, console.log("Serving Running"));
