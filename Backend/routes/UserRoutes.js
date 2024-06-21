const express = require("express");
const router = express.Router();

const { createUser } = require("../controllers/UserControllers");
router.post("/signup", createUser);

router.post("/login", (req, res) => {
  console.log(req.body);
  res.status(200).json("Signup Successfully");
});

module.exports = router;
