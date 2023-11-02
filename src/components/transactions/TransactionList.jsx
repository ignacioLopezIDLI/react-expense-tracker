import { useGlobalState } from "../../context/GlobalState"

function TransactionList() {
    const {transactions, deleteTransaction} = useGlobalState()

  return (
    <div>{
        transactions.map(transaction => (
            <div key={transaction.id}> 
                <p>{transaction.description}</p>
                <span>{transaction.amount}</span>
                <button onClick={()=>{
                    deleteTransaction(transaction.id);
                } }>
                    x
                </button>
            </div>
        ))
        }</div>
  )
}

export default TransactionList