import React from 'react'
import BOUTTONEXIT from '../assets/exit.svg'
import { useState , useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction'
const TransactionList = () => {
   
    const transactions = useContext(GlobalContext)
  
   
    
  return (
    <div className='Transaction'>
       <h3>History</h3>  
        <hr />
        <ul>
      {
        transactions.transactions.map(transaction => ( 
           <Transaction  transaction={transaction } />
        ))
      }
        </ul>
    </div>
  )
}

export default TransactionList