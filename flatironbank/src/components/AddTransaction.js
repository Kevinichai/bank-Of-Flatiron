// Added the add Transaction function here to pass it down as a prop
function addTransaction(transaction) {
    fetch('http://localhost:3000/transactions', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
  })
  .then(response => response.json())
  .then(data => setTransactions([...transactions, data]));
}

