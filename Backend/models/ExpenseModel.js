const sequelize = require("../utils/db");

const { Sequelize } = require("sequelize");

const user = sequelize.define("expenses", {
 
  expenseamount: Sequelize.INTEGER,
  category: Sequelize.STRING,
  date:Sequelize.DATEONLY,
  description: Sequelize.STRING,
});

module.exports = user;
