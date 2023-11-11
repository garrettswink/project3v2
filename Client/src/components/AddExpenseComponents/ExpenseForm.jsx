// Imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ExpenseForm.css";

// Export Function
export function ExpenseForm(props) {
  // Set State Variables
  const [enteredExpense, setEnteredExpense] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isFormValid, setIsFormValid] = useState(null); 
  const navigate = useNavigate();

  // Set Event Handlers
  const expenseChangeHandler = (e) => {
    setEnteredExpense(e.target.value);
  };

  const categoryChangeHandler = (e) => {
    setEnteredCategory(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };


const addExpenseHandler = async () => {
  const transactionData = {
    expense: enteredExpense,
    category: enteredCategory,
    amount: parseFloat(enteredAmount),
    date: enteredDate,
  };

  try {
    const response = await fetch ('http://localhost:3001/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transactionData),
    })

    if (!response.ok) {
      throw new Error('Error. Could not post data.')
    }

    const result = await response.json();
    setIsFormValid('valid');
    navigate('/transactions'); // Navigate after successful POST.
  } catch (error) {
    console.error('Failed to add expense', error);
    setIsFormValid('invalid');
  }
}

  //   Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();

    if (!enteredExpense || !enteredCategory || !enteredAmount || !enteredDate) {
      setIsFormValid('invalid');
      return;
    }
    addExpenseHandler(); 
    
  };
  

    // Message for invalid submission
    const errorMessage = isFormValid === 'invalid' && (
      <p>Error. Please fill in all form fields.</p>
    );
  
    const navigateToTransactions = () => {
      navigate('/transactions');
    };

    // Button for a valid submission
    const successButton = isFormValid === 'valid' && (
      <button onClick={navigateToTransactions}>Success. Review Transactions</button>
    );



  return (
    <>
      {/* // Expense Form */}
      <form onSubmit={submitHandler}>
        <div className="new-expense-container">
          <div className="new-expense-input">
            <label htmlFor="">Expense</label>

            <input
              id="expense-name"
              type="text"
              value={enteredExpense}
              onChange={expenseChangeHandler}
            />
          </div>

          {/* Expense Category Input */}
          <div className="new-expense-input">
            <label htmlFor="">Category</label>

            <select
              id="expense-category"
              value={enteredCategory}
              onChange={categoryChangeHandler}
            >
              <option value="">Select Category</option>
              <option value="Bills">Bills</option>
              <option value="Groceries">Groceries</option>
              <option value="Subscription">Subscription</option>
              <option value="Travel">Travel</option>
              <option value="Leisure">Leisure</option>
              <option value="Car Expense">Car Expense</option>
            </select>
          </div>

          <div className="new-expense-input">
            <label htmlFor="">Amount</label>

            <input
              id="expense-amount"
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>

          <div className="new-expense-input">
            <label htmlFor="">Date</label>

            <input
              id="expense-date"
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>

          {/* Buttons */}
          <div className="new-expense-action">
            <button type="submit">Add Expense</button>
            <button type="button" onClick={props.onCancel}>
              Cancel
            </button>
          </div>
        </div>
      </form>
      {errorMessage}
      {successButton}
    </>
  );
}
