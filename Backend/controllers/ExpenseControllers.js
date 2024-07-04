const Expense = require("../models/ExpenseModel");
const ExpenseController = {
  /* Getting all the available Expense From mysql2 */
  getAvailableExpense: async (req, res) => {
    const {user_id} = req.params;
    try {
      // const slots = await Expense.findAll({});
      const availExpense = await Expense.findAll({ where: { user_id: user_id } });
      res.json(availExpense);
    } catch (error) {
      console.log("Error in getting expense", error);
      res.status(500).json({ error: "Failed to fetch expense" });
    }
  },
  /* Creating the  Expense in mysql2 */
  createExpense: async (req, res) => {
    // const { expenseamount, category, description } = req.body;
    // const {id} = req.params;
    let data = {
      user_id: req.params.id,
      expenseamount: req.body.expenseamount,
      category: req.body.category,
      date: req.body.date,
      description: req.body.description,
    };

    // console.log("id in req.params is ",id);

    try {
      const newSlot = await Expense.create(data);
      // const newSlot = await Expense.create({ expenseamount, category, description });
      res.status(201).json(newSlot);
    } catch (error) {
      console.log("Error in creating slot", error);
      res.status(500).json({ error: "Failed to create slot" });
    }
  },
  /* Updating all the available Expense From mysql2 */
  /* Updating an Expense in mysql2 */
  updateExpense: async (req, res) => {
    const { id } = req.params;
    const { expenseamount, category, date, description } = req.body;

    try {
      const expenseToUpdate = await Expense.findByPk(id);
      if (!expenseToUpdate) {
        return res.status(404).json({ error: "Expense not found" });
      }

      // Update the fields
      expenseToUpdate.expenseamount = expenseamount;
      expenseToUpdate.category = category;
      expenseToUpdate.date = date;
      expenseToUpdate.description = description;

      await expenseToUpdate.save();

      res.json(expenseToUpdate);
    } catch (error) {
      console.log("Error in updating expense", error);
      res.status(500).json({ error: "Failed to update expense" });
    }
  },

  /* Deleting all the available Expense From mysql2 */
  deleteExpense: async (req, res) => {
    const { id } = req.params;

    try {
      const slotToDelete = await Expense.findByPk(id);
      if (!slotToDelete) {
        return res.status(404).json({ error: "Slot not found" });
      }
      await slotToDelete.destroy();
      res.status(200).json({ message: "Slot deleted successfully" });
    } catch (error) {
      console.log("Error in deleting slot", error);
      res.status(500).json({ error: "Failed to delete slot" });
    }
  },
};

module.exports = ExpenseController;
