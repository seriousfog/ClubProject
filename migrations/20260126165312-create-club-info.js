'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clubinfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clubname: {
        type: Sequelize.STRING
      },
      advisorfirstname: {
        type: Sequelize.STRING
      },
      advisorlastname: {
        type: Sequelize.STRING
      },
      meetingdate: {
        type: Sequelize.STRING
      },
      clubroomnumber: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      clublogo: {
        type: Sequelize.STRING
      },
      smalldescription: {
        type: Sequelize.STRING
      },
      secondadvisorfirstname: {
        type: Sequelize.STRING
      },
      secondadvisorlastname: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clubinfos');
  }
};