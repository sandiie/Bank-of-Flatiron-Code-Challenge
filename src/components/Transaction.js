import React from "react";

function Transaction({ transaction}) {

  function handleDelete(id)

    {
      fetch(`https://bank-of-flatiron-92eu.onrender.com/transactions/${id}`, {
        method: "DELETE"
      })
      .then((data)=> data.json())
      .then((res)=>{   
        
        alert("Transaction deleted successfully")

      })
    }

  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
      <td> <button  onClick = {()=> handleDelete(transaction.id)}>delete </button></td>      
    </tr>
  );
}

export default Transaction;
