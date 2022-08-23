import React from 'react'
import Header from './Components/Header'
import './Style.css'
import Balance from './Components/Balnace'
import Income from './Components/Income'
import TransactionList from './Components/TransactionList'
import AddTransaction from './Components/AddTransaction'
import { GlobalProvider } from './Context/GlobalState'
export const App = () => {
  return (
    
      <GlobalProvider>

<Header />
<Balance />
<Income />
<TransactionList />
<AddTransaction />
</GlobalProvider>
   
  )
}

export default App





