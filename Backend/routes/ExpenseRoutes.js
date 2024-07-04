const express = require("express");
const router = express.Router();

const userAuthenticate = require('./Auth')

const {
  createExpense,
  deleteExpense,
  getAvailableExpense,
  updateExpense,
} = require("../controllers/ExpenseControllers");

/* Available routes for expense */

// i have attached the user_id in header section so we don't need to use params explicitly to use user_id

router.post("/createExpense",userAuthenticate.authenticate, createExpense);
// router.get("/getExpense", getAvailableExpense);

// before going to getresponse i want to check who is requesting for data using the middleware 
router.get("/getExpenseById", userAuthenticate.authenticate,getAvailableExpense);

router.put("/updateExpense/:id", updateExpense);
router.delete("/deleteExpense/:id", deleteExpense);


// router.get('/:id',productController.getOneProduct);
// router.put('/:id',productController.updateProduct);
// router.delete('/:id',productController.deleteProduct);

module.exports = router;
