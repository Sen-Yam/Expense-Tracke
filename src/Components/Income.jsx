import React from 'react'

const Income = () => {
  return (
   
        <div className='Income'>
        <div className="I-E">
            <h3>INCOME</h3>
            <h4 style={{color : 'green'}}>+$0.00</h4>
        </div>
        <div style={{
            backgroundColor : 'gray'
            , width : '1px',
            
        }}></div>
        <div className="I-E">
            <h3>EXPENSE</h3>
            <h4 style={{color : 'red'}}>-$0.00</h4>
        </div>
    </div>
    
  )
}

export default Income