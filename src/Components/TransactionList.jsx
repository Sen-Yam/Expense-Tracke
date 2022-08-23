import React from 'react'
import BOUTTONEXIT from '../assets/exit.svg'
import { useState , useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
const TransactionList = () => {
    const [isAppearButton , setisAppearButton] = useState(false)
    const transactions = useContext(GlobalContext)
  
   
    const appear = ()  => {
        setisAppearButton(!isAppearButton)
    }
  return (
    <div className='Transaction'>
       <h3>History</h3>  
        <hr />
        <ul>
      {
        transactions.transactions.map(transaction => ( 
            <li>
            {/* <img alt='btn' src={BOUTTONEXIT} className="img"  style = {{
                display : isAppearButton  ? 'none' : 'block' , 
               }}  /> */}
                <div className='element' /*  onMouseOut={appear}  */  style={{
                    marginLeft :  isAppearButton  ? '1%%' : '38%'
                }}>
                   
                    {transaction.Text}
                    <div>{transaction.Amount}</div>
                    <div 
                    style={{
                        backgroundColor : 'red' , position : 'absolute' , width : '4px' , height : '5%'
                        , marginLeft : '19.57%' , marginTop : '-5px'
                    }}
                    > </div>
                </div>
            </li>
        ))
      }
        </ul>
    </div>
  )
}

export default TransactionList