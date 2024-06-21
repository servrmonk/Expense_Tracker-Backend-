const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "expense_tracker",
  "root",
  "sqllegasypassword24",
  {
    dialect: "mysql",
    host: "localhost",
    logging: false,
  }
);
module.exports = sequelize;
