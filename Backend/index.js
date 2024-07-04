const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./routes/UserRoutes");
const expenseRoute = require("./routes/ExpenseRoutes");
const db = require("./utils/db");

const expense = require("./models/ExpenseModel");
const user = require("./models/UserModel");

app.use(cors({ origin: "http://localhost:5173" }));

// This middleware is used to parse incoming requests with JSON payloads.It transforms the text of the request body into a JavaScript object if the Content-Type of the request is application/json.It's necessary for handling JSON data sent by the client, like in your case where you send JSON data with axios.post().
app.use(express.json());

// This middleware is used to parse incoming requests with URL-encoded payloads (typically from HTML forms).If extended is true, it uses the qs library to parse the URL-encoded data, which allows for rich objects and arrays. If extended is false, it uses the querystring library, which does not support nested objects.
app.use(express.urlencoded({ extended: true }));

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
