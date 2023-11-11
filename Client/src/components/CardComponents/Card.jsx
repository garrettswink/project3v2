import React from "react";
import "../CardComponents/Card.css";

export function Card({ data }) {
    


  return (
    <div className="expense-card">
    <div className="expense-date">Date: {data.date}</div>
    <div className="expense-category">Category: {data.category}</div>
    <div className="expense-description">Description: {data.expense}</div>
    <div className="expense-amount">Amount: ${data.amount}</div>
      
    </div>
  );
}
