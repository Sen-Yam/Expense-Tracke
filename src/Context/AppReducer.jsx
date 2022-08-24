export default (state , dispatch)=> {
    switch(dispatch.type) {
        case 'Delete_Transaction' : 
        
        return {
            ...state, 
            
            transactions : state.transactions.filter(transaction=> (transaction.id !==dispatch.payload))
        }
        default :
        return state;
    }
}