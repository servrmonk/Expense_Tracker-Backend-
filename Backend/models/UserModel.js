const sequelize = require("../utils/db");

const {  Sequelize } = require("sequelize");

const user = sequelize.define("user", {
 
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique:true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = user
