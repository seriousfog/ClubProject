'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clubInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  clubInfo.init({
    clubname: DataTypes.STRING,
    advisorfirstname: DataTypes.STRING,
    advisorlastname: DataTypes.STRING,
    meetingdate: DataTypes.STRING,
    clubroomnumber: DataTypes.STRING,
    category: DataTypes.STRING,
    clublogo: DataTypes.STRING,
    smalldescription: DataTypes.STRING,
    secondadvisorfirstname: DataTypes.STRING,
    secondadvisorlastname: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'clubInfo',
    timestamps: false,
    tableName: 'clubinfo'
  });
  return clubInfo;
};