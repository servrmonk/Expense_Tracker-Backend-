const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const authenticate = (req, res, next) => {
  try {
    const token = req.header("Authorization"); //checking who is accessing this
    // console.log("Token inside auth ", token);
    // const user = Number(jwt.verify(token, "secretRandomKey"));
    const user = jwt.verify(token, "secretRandomKey");
    // console.log("user in jwt.verify ", user.userId);
    User.findByPk(user.userId).then((user) => {
      //pk means primary key
      // console.log("Json.stringify(user) => ", JSON.stringify(user));
      req.user = user; //this will attach user in req and u can extract this , very important. //here i have attached the user id in req obj using middleware auth.js check in routes
      next();
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({ success: false });
  }
};
module.exports = { authenticate };
