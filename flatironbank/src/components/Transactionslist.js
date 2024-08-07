import React, { useEffect, useState } from 'react'

function Transactionslist() {
    const [transactions, setTransactions] = useState([]);
    useEffect(
        ()=>{
            fetch('http://localhost:3000/transactions')
            .then(res =>res.json())
            .then(data=> setTransactions(data));
        },[]
    );
  return (
    <div>Transactionslist</div>
  )
}

export default Transactionslist