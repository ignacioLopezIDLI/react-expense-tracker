import React from 'react'
import { useGlobalState } from '../context/GlobalState'

function IncomeExpenses() {

    const {transactions} = useGlobalState()

    const amounts = transactions.map((transaction) => transaction.amount)

    const income = amounts
    .filter((item) => item > 0 )
    .reduce((acc,item) => (acc += item), 0)

    const expense = amounts
    .filter((item) => item < 0 )
    .reduce((acc,item) => (acc += item) , 0) * -1

  return (
    <>
        <div className='flex justify-between my-2'>   
            <h4>Ingresos</h4>
            <p>${income}</p>
        </div>
        <div className='flex justify-between my-2'>
            <h4>Gastos</h4>
            <p>${expense}</p>
        </div>
    </>
  )
}

export default IncomeExpenses