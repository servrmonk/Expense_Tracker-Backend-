const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.post("/user/signup", (req, res) => {
  console.log(req.body);
  res.status(200).json("Signup Successfully");
});

app.post("/user/login", (req, res) => {
  console.log(req.body);
  res.status(200).json("Signup Successfully");
});

app.listen(3002, () => {
  console.log("App started on localhost 3002");
});
