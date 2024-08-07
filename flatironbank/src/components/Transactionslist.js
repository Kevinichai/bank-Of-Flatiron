import React, { useEffect, useState } from 'react';
// function to showcase filtered transactions and to fetch from db.json data
function TransactionsList({ transactions, searchTerm }) {
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => setFilteredTransactions(data));
  }, []);
// useEffect hook to ensure that searches for filtered transactions are case sensitive
  useEffect(() => {
    setFilteredTransactions(
      transactions.filter(transaction =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [transactions, searchTerm]);
// Return of function that displays a table holding the transactions
  return (
    <div id="transactions-list">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsList;
