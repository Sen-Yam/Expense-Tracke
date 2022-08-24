export default (state , dispatch)=> {
    switch(dispatch.type) {
        case 'Delete_Transaction' : 
        
        return {
            ...state, 
            
            transactions : state.transactions.filter(transaction=> (transaction.id !==dispatch.payload))
        }
        case 'Add_New_T' : 
        return  {
            ...state  ,
            transactions : [dispatch.payload,...state.transactions]
        } 
        default :
        return state;
    }
}