import "./Transactions.css";
import { Card } from "../components/CardComponents/Card";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function History() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://localhost:3001/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTransactions(data); // Set the transactions in state
      } catch (error) {
        console.error('Error: Fetch Opertaion', error);
      }
    };

    fetchTransactions();
  }, []); // The empty array causes this effect to only run on mount
  

  return (
    <>
      <h1>Transaction History</h1>
      
      <div className="history-container">
        <Link to="/tracker">
      <button className="new-expense-btn">Add Another Expense</button>
      </Link>
      {transactions.map((transaction) => (
          <Card key={transaction.id} data={transaction} /> // Pass the transaction data as props to the Card component
        ))}
      </div>
    </>
  );
}
