const User = require("../models/UserModel");

const UserControllers = {
  createUser: async (req, res) => {
    const { name, email, password } = req.body;
    // console.log(req.body);
    try {
      const userEmail = await User.findOne({ where: { email: email } });
      if (userEmail === null) {
        // console.log("Not found!");
        const newUser = await User.create({ name, email, password });
        res.status(201).json(newUser);
      } else {
        console.log("User already exist ");
        res.status(401).json({ err: "User already exist" });
      }
    } catch (err) {
      console.log("Error in Creating user ", err);
      res.status(500).json({ err: "Failed to create user" });
    }
  },
  loginUser: async (req, res) => {
    const { name,email, password } = req.body;
    console.log(req.body);
    try {
      const userVerify = await User.findOne({
        where: { email: email, password: password },
      });
      if (userVerify === null) {
        res.status(403).json({ err: "User doesn't exist" });
      } else {
        console.log("User  exist  ");
        res.status(200).json({ msg: "User login status is true now" });
      }
    } catch (err) {
      console.log("Error in Logging in  user ", err);
      res.status(500).json({ err: "Failed to login user" });
    }
  },
};
module.exports = UserControllers;
