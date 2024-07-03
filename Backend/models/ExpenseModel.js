const sequelize = require("../utils/db");

const { Sequelize } = require("sequelize");

const user = sequelize.define("expenses", {
 
  expenseamount: Sequelize.INTEGER,
  category: Sequelize.STRING,
  description: Sequelize.STRING,
});

module.exports = user;
