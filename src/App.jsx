import { GlobalProvider } from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'
import IncomeExpenses from './components/IncomeExpenses'

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <IncomeExpenses/>
      <Balance/>
      <TransactionForm/>
      <h1>Hello Wolrd</h1>
      <TransactionList/>
    </GlobalProvider>
  )
}

export default App