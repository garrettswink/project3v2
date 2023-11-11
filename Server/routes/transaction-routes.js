const express = require("express");
const router = express.Router();
const TransactionModel = require("../models/TransactionModel");

// Create a new transaction
router.post("/", async (req, res) => {
  try {
    const { expense, category, amount, date } = req.body;

    const transaction = await TransactionModel.create({
      expense,
      category,
      amount,
      date,
    });

    res.status(201).json(transaction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Retrieve all transactions
router.get("/", async (req, res) => {
    try {
      const transactions = await TransactionModel.findAll();
  
      res.status(200).json(transactions);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // router.delete("/:id", async (req, res) => {
  //   try {
  //     const { id } = req.params;
  
  //     const transaction = await TransactionModel.findByPk(id);
  
  //     if (!transaction) {
  //       return res.status(404).json({ error: "Transaction not found" });
  //     }
  
  //     await transaction.destroy();
  
  //     res.status(204).send(); // No content response
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ error: "Internal Server Error" });
  //   }
  // });
  

module.exports = router;
