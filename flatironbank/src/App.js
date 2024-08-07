import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TransactionsList from './components/Transactionslist';
import addTransaction from './components/AddTransaction';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [transactions, setTransactions] = useState([]);

  //  Added the addTransaction function here to pass it down as a prop
  function addTransaction(transaction) {
    fetch('https://bankofflatirondata.vercel.app/transactions', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
  })
  .then(response => response.json())
  .then(data => setTransactions([...transactions, data]));
}

  return (
    <div className="app">
      <h1>Transaction Details</h1>
      <input
        type='text'
        placeholder='search by description'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Form addTransaction={addTransaction} />
      <TransactionsList transactions={transactions} searchTerm={searchTerm} />
    </div>
  );
}

export default App;

