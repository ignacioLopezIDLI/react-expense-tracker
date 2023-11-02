import { GlobalProvider } from './context/GlobalState'
import Header from './components/Header'
import Balance from './components/Balance'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <Balance/>
      <TransactionForm/>
      <h1>Hello Wolrd</h1>
      <TransactionList/>
    </GlobalProvider>
  )
}

export default App