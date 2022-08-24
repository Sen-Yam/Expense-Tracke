import React from 'react'
import { useState , useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const AddTransaction = () => {
    const [Text , setText] = useState('')
    const [Amount , setAmount] = useState(0)
    const {AddNewT} = useContext(GlobalContext)
    const Submission = (e) => {
      e.preventDefault();
      console.log(Amount , Text)
      var NewT = {id : Math.floor(Math.random()*100000000) ,Text  , Amount : +Amount}
      console.log(NewT)
      AddNewT(NewT)
    }
   
  return (
    <div className='Add'>
        <h3>Add new transaction</h3>  
        <hr />
    <div className='label'>
       <h4>Text</h4>
       <input type="text" placeholder='Enter text...' className='input' value={Text} onChange = {(e)=> {
        setText(e.target.value)
       }}/>
    </div>
    <div className='label'>
       <h4 style={{marginLeft : '2.5%'}}>Amount <br /><span style={{marginLeft : '16%'}}>negative expense , positive income </span></h4>
       <input type="text" placeholder='Enter amount...' className='input'
       value={Amount} onChange = {(e)=> {
        setAmount(e.target.value)
       }}
       />
    </div>
    <button className='addbtn' onClick={Submission}>Add transaction</button>
    </div>
  )
}

export default AddTransaction