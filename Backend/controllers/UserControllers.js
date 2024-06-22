const User = require("../models/UserModel");
const bcrypt = require("bcrypt");

const UserControllers = {
  createUser: async (req, res) => {
    const { name, email, password } = req.body;
    // console.log(req.body);
    try {
      const userEmail = await User.findOne({ where: { email: email } });
      if (userEmail === null) {
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
        console.log("yes user.length");
        bcrypt.compare(password, user[0].password, (err, result) => {
          //password user has sent, hash is in usertable  and 3rd arg will take an error and the result(or it match or not) (first arg would be error)
          if (err) {
            res.status(500).json({ success: false, message: "Something went wrong" });
          } else if(result){
            res.status(200).json({ success: true, message: "User logged in succesfully" });
            
          }
            else {
            return res.status(400).json({ success: false, message: "Password is incorrect" });
          }
        });
      } else {
        return res.status(404).json({ success: false, message: "User Doesn't Exist" });
      }
    } catch (err) {
      res.status(500).json({ message: err, success: false });
    }
  },
};
module.exports = UserControllers;
