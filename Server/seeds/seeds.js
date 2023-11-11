const TransactionModel = require('../models/TransactionModel')

const TransactionData = [

    {
        expense: 'Internet Bill',
        category: 'Bills',
        amount: 60.00,
        date: '2023-01-01',
      },
      {
        expense: 'Groceries',
        category: 'Groceries',
        amount: 120.50,
        date: '2023-01-05',
      },
      {
        expense: 'Netflix Subscription',
        category: 'Subscription',
        amount: 15.99,
        date: '2023-01-10',
      },
      {
        expense: 'Plane Tickets',
        category: 'Travel',
        amount: 559.90,
        date: '2023-01-15',
      },
      {
        expense: 'Movie Tickets',
        category: 'Leisure',
        amount: 30.00,
        date: '2023-01-20',
      },
      {
        expense: 'Gas',
        category: 'Car Expense',
        amount: 45.00,
        date: '2023-01-25',
      },
      {
        expense: 'Car Insurance',
        category: 'Bills',
        amount: 135.75,
        date: '2023-02-01',
      },
      {
        expense: 'Gym Membership',
        category: 'Subscription',
        amount: 25.00,
        date: '2023-02-05',
      },
      {
        expense: 'Hotel Booking',
        category: 'Travel',
        amount: 300.00,
        date: '2023-02-10',
      },
      {
        expense: 'Birthday Gift',
        category: 'Leisure',
        amount: 80.00,
        date: '2023-02-15',
      }
    ];

    const seedTransactions = () => TransactionModel.bulkCreate(TransactionData);

    module.exports = seedTransactions;