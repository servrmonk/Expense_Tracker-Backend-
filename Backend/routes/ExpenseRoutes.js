const express = require("express");
const router = express.Router();
const {
  createExpense,
  deleteExpense,
  getAvailableExpense,
  updateExpense,
} = require("../controllers/ExpenseControllers");

/* Available routes for expense */

router.post("/createExpense/:id", createExpense);
// router.get("/getExpense", getAvailableExpense);


router.put("/updateExpense/:id", updateExpense);
router.delete("/deleteExpense/:id", deleteExpense);
router.get("/getExpenseById/:user_id", getAvailableExpense);

// router.get('/:id',productController.getOneProduct);
// router.put('/:id',productController.updateProduct);
// router.delete('/:id',productController.deleteProduct);

module.exports = router;
