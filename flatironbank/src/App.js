import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TransactionsList from './components/Transactionslist';
import AddTransaction from './components/AddTransaction';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [transactions, setTransactions] = useState([]);



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

