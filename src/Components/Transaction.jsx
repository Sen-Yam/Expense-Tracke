import React , {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { GlobalProvider } from '../Context/GlobalState'

const Transaction = ({transaction}) => {
    var sign = transaction.Amount < 0 ? '-' : '+';
    const {Delete_Transaction }=   useContext(GlobalContext) ;
  return (
    <li>
           <button className='btnexit' onClick={()=>Delete_Transaction(transaction)}>x</button>
                <div className='element' 
                    
                >
                   
                    {transaction.Text}
                    <div>{sign}{Math.abs(transaction.Amount)}$</div>
                    <div 
                    style={{
                        backgroundColor : transaction.Amount < 0 ?  'red' :'green' , position : 'absolute' , width : '4px' , height : '5%'
                        , marginLeft : '19.57%' , marginTop : '-5px'
                    }}
                    > </div>
                </div>
            </li>
  )
}

export default Transaction