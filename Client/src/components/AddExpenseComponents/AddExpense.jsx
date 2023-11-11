// Imports
import "./AddExpense.css"
import {ExpenseForm} from "./ExpenseForm"
import {useState} from "react";


// Export Function
export function AddExpense(props) {

// Initialize State
const [isEditing, setIsEditing] = useState(false)

// Event Handler Called When User Submits Form
const saveExpenseDataHandler = (expenseData) => {

    // Load Expense Form Data; Add ID
const data = {
    ...expenseData,
    id: Math.random().toString()
};

// Event Handler Called By App.JS on User Form Submit
props.onAddExpense(data)
};

// Event Handler: Opens Form When Add Expense Button Clicked
const startEditingHandler = () => {
    setIsEditing(true);
};

// Event Handler: Cancel Button
const stopEditingHandler = () => {
    setIsEditing(false);
};

return (
    <div className="add-expense">
        {
            /* If isEditing is true, display form, else display the Add Expense button */
            isEditing === true ?
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} 
            onCancel={stopEditingHandler} /> :
            <button onClick={startEditingHandler}>Add Expense</button>
        }
    </div>
)
}