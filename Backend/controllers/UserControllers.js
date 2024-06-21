const User = require("../models/UserModel");

const UserControllers = {
  createUser: async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    try {
      const userEmail = await User.findOne({ where: { email: email } });
      if (userEmail === null) {
        // console.log("Not found!");
        const newUser = await User.create({ name,email, password });
        res.status(201).json(newUser);
      } else {
        console.log("User already exist ");
        res.status(401).json({ err: "User already exist" });
      }
    } catch (err) {
      console.log("Error in Creting user ", err);
      res.status(500).json({ err: "Failed to create user" });
    }
  },
};
module.exports = UserControllers;
