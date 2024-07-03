const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./routes/UserRoutes");
const expenseRoute = require("./routes/ExpenseRoutes");
const db = require("./utils/db");

const expense = require("./models/ExpenseModel");
const user = require("./models/UserModel");

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/user", userRoute);
app.use("/expense", expenseRoute);

user.hasMany(expense, {
  foreignKey: "user_id",
  as: "expense",
});
expense.belongsTo(user, {
  foreignKey: "user_id",
  as: "user",
});

db.sync()
  .then(() => {
    console.log("All the table synced successfully");
    app.listen(3002, () => {
      console.log("App started on localhost 3002");
    });
  })
  .catch((err) => console.log("Error in syncing the tables ", err));
