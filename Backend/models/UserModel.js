const sequelize = require("../utils/db");

const { DataTypes } = require("sequelize");

const user = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement:true,
    defaultValue:DataTypes.UUIDV4,
    allowNull:false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = user

// string password -> encrypt -> hash value  . what we save in db (this is one way incryption) once we encrypt it we get a hash but i can never go back to the password again
// there are some algorithm 
// the algo we are using is called Blowfish encryption but this also has some problem this is older way of doing this what essentially happens is that  if we put the password 12345678 or similar to this when i incrypt this we get a hash 
// if 2 user suppose put same password

// 12345678 -> Encrypt -> hasha (anything like "kdoeko")
// 12345678 -> Encrypt -> hasha

//so then engineer start adding salt  => Encrypt + salt(saltis small string basically)  if u even put the same password u get the different output always
//  user A  password => 123456 + salt -> 12345 + 'lsie'
//  user B  password => 123456 + salt -> 12345 + 'jdje'
// whatever password we get we gonna salt it and then encrypt it through blowfish incryption it's called bcrypt(blowfish incrypt) and whatever hash we get we gonna save it in the db so that's going to the signup section 
// code is very easy we just use bcrypt library
// just install npm i bcrypt library and that's it
// salt is to create a random string so how many time i can randomize normal is 10 times 

// then next thing is login is not work now u can't match the password for match u have to write a algorith for that
