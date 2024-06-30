const sequelize = require("../utils/db");

const { Sequelize } = require("sequelize");

const user = sequelize.define("expenses", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  expenseamount: Sequelize.INTEGER,
  category: Sequelize.STRING,
  description: Sequelize.STRING,
});

module.exports = user;
