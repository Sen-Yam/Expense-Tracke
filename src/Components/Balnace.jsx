import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import '../Style.css'
const Balnace = () => {
  const transactions = useContext(GlobalContext)
  
  const Amounts = transactions.transactions.map(transaction => (transaction.Amount))
  const Total = Amounts.reduce((acc,item)=> acc+=item,0).toFixed(2)
  return (
    
 <div className='Balance'>
     <h4>YOUR BALANCE</h4>
     <h1>{Total}$</h1>
 </div>
  )
}

export default Balnace