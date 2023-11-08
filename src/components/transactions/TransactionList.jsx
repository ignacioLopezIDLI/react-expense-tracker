import { useGlobalState } from "../../context/GlobalState"
import { TransactionItems } from "./TransactionItems"

function TransactionList() {
    const { transactions } = useGlobalState()

  return (
    <div className="">
      <h3 className=" text-slate-300 text-xl font-bold w-full">Historial</h3>
        <ul>
            {transactions.map(transaction => (
            <TransactionItems transaction = {transaction} 
            key={transaction.id}/>
        ))}
        </ul>
    </div>
    
  )
}

export default TransactionList