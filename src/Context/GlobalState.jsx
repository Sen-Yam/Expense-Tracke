import { createContext , useReducer } from "react";
import AppReducer from './AppReducer'
const initialState = {
    transactions : [
        {id : 1, Text  : 'Flower',  Amount : -20} ,
        {id :2 , Text  : 'Salary',  Amount : 300} ,
        {id : 3, Text  : 'Book',  Amount :-10 } ,
        {id :4 , Text  :'Camera' ,  Amount : 150} 

    ]
}

export const  GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state , dispatch] = useReducer(AppReducer , initialState);
    function Delete_Transaction(transaction) {
        console.log(`trans is ${transaction}`)
      // action : 
        dispatch({
            type : 'Delete_Transaction' ,
            payload : transaction.id
        })
    }
    return (
        <GlobalContext.Provider
        value={{
            transactions : state.transactions , Delete_Transaction
        }} >

            {children}
        </GlobalContext.Provider>
    )
}