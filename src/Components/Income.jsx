import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction'

const Income = () => {
    const transactions = useContext(GlobalContext)
    const Amounts = transactions.transactions.map(transaction=>transaction.Amount)
    const Incomes = Amounts.filter((Amount)=> Amount>0)
   
    const Expenses = Amounts.filter((Amount)=> Amount<0)
    const TotalIncomes = Incomes.reduce((acc , item)=> acc+=item,0).toFixed(2)
    
    const TotalExpenses = Expenses.reduce((acc , item)=> acc+=item , 0).toFixed(2)
  
  return (
    
        <div className='Income'>
        <div className="I-E">
            <h3>INCOME</h3>
            <h4 style={{color : 'green'}}>+{TotalIncomes}$</h4>
        </div>
        <div style={{
            backgroundColor : 'gray'
            , width : '1px',
            
        }}></div>
        <div className="I-E">
            <h3>EXPENSE</h3>
            <h4 style={{color : 'red'}}>{TotalExpenses}$</h4>
        </div>
    </div>
    
  )
}

export default Income