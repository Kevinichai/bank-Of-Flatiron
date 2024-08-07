import React from 'react';
// Function to post new transactions that would be added
function AddTransaction(transaction, setTransactions, transactions) {
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

export default AddTransaction;
