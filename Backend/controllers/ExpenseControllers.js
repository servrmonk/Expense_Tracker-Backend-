const Expense = require("../models/ExpenseModel");

const ExpenseController = {
  /* Getting all the available Expense From mysql2 */
  getAvailableExpense: async (req, res) => {
    try {
      const slots = await Expense.findAll({ where: { email: email } });
      res.json(slots);
    } catch (error) {
      console.log("Error in fetching slots", error);
      res.status(500).json({ error: "Failed to fetch slots" });
    }
  },
  /* Creating the  Expense in mysql2 */
  createSlotToAvailable: async (req, res) => {
    const { name, time, slot, slotId } = req.body;
    try {
      const newSlot = await AvailableSlot.create({ name, time, slot, slotId });
      res.status(201).json(newSlot);
    } catch (error) {
      console.log("Error in creating slot", error);
      res.status(500).json({ error: "Failed to create slot" });
    }
  },
  /* Updating all the available Expense From mysql2 */
  updateSlot: async (req, res) => {
    const { id } = req.params;
    const { slot } = req.body;
    console.log("Req.params in update slot==>>", req.params);
    console.log("req.body update slot ", req.body);
    try {
      const slotToUpdate = await AvailableSlot.findByPk(id);
      if (!slotToUpdate) {
        return res.status(404).json({ error: "Slot not found" });
      }
      slotToUpdate.slot = slot;
      await slotToUpdate.save();
      res.json(slotToUpdate);
    } catch (error) {
      console.log("Error in updating slot", error);
      res.status(500).json({ error: "Failed to update slot" });
    }
  },
  /* Deleting all the available Expense From mysql2 */
  deleteSlot: async (req, res) => {
    const { id } = req.params;

    try {
      const slotToDelete = await AvailableSlot.findByPk(id);
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
