import React, { useState } from 'react';
 
// Setting useState meant to handle functionality that would allow for the adding of a new transaction
const Form = ({ addTransaction }) => {
    const [newTransaction, setNewTransaction] = useState({
        date: '',
        description: '',
        category: '',
        amount: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTransaction({
            ...newTransaction,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction(newTransaction);
        setNewTransaction({ date: '', description: '', category: '', amount: 0 });
    };

    return (
        // This is the container to hold the inputs that allows theclient to input a transaction
        <form onSubmit={handleSubmit} className="form">
            <input type="date" name="date" value={newTransaction.date} onChange={handleChange} required />
            <input type="text" name="description" value={newTransaction.description} onChange={handleChange} placeholder="Description" required />
            <input type="text" name="category" value={newTransaction.category} onChange={handleChange} placeholder="Category" required />
            <input type="number" name="amount" value={newTransaction.amount} onChange={handleChange} placeholder="Amount" required />
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default Form;
