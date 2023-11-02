export default (state, action) =>{
     switch(action.type){
        case "ADD_TRANSACTION":
            return {
            ...state,
              transactions: [...state.transactions, action.payload]
            };
        case "DELETE_TRANSACTION":
          return {
             ...state,
             transactions: state.transactions.filter( // Si id es igual no se añade al nuevo arreglo
              (transaction)  => transaction.id !== action.payload
              ) 
          }
        default:
            return state
     }
}