const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

const UserControllers = {
  createUser: async (req, res) => {
    const { name, email, password } = req.body;
    // console.log(req.body);
    try {
      const userEmail = await User.findOne({ where: { email: email } });
      if (userEmail === null) {
        // bcrypt.hash(password, saltrounds, async (err, hash) => { //saltround to create a random string how many times i will randomize, so that string along with it's password is hash so normal is 10 times , 10 times randomize and get a string
        // more the salrtounds the less possibility of the do strings matching so if u have 1million user there is less chance to match password u can do 20, 30 anything
        bcrypt.hash(password, 10, async (err, hash) => {
          console.log("Error in bcrypt.hash ", err);
          console.log("Hash======> ", hash);
          const newUser = await User.create({ name, email, password: hash });
          res.status(201).json(newUser);
        });
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
    const { name, email, password } = req.body;
    
    try {
      const user = await User.findAll({
        where: { email: email },
      });
      console.log("user in userController ", user);
      console.log(req.body);
      if (user.length > 0) {
        console.log("inside the user.length");
        if (user[0].password === password) {
          res
            .status(200)
            .json({ success: true, message: "User logged in successfully" });
        } else {
          return res
            .status(400)
            .json({ success: false, message: "Password is incorrect" });
        }
      } else {
        return res
          .status(400)
          .json({ success: false, message: "User Doesn't Exist" });
      }
    } catch (err) {
      res.status(500).json({ message: err, success: false });
    }
  }
};
module.exports = UserControllers;
