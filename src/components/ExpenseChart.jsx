import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";

function ExpenseChart() {
  const { transactions } = useGlobalState();
  const totalIncomes = transactions
  .filter((transaction) => transaction.amount > 0)
  .reduce((acc, transaction) => (acc += transaction.amount), 0);

const totalExpenses = transactions
  .filter((transaction) => transaction.amount < 0)
  .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

console.log({
  totalIncomes,
  totalExpenses,
});

const expensesPercentage = Math.round((totalExpenses / totalIncomes) * 100);
const incomesPercentage = 100 - (expensesPercentage);
  

return (
    <div>
      {transactions.length > 0 && (
        <VictoryPie
          colorScale={["#e74c3c", "#2ecc71"]}
          data={[
            { x: "Gastos", y: expensesPercentage },
            { x: "Ingresos", y: incomesPercentage },
          ]}
          animate={{
            duration: 200,
          }}
          labelComponent={
            <VictoryLabel
              angle={45}
              style={{
                fill: "white",
              }}
            />
          }
          width={500}
          margin={10}
        />
      )}
      {transactions.length === 0 && (
        <h2 className="text-center text-gray-500 text-5xl">Agrega transacciones</h2>
      )}
    </div>
  );
}

export default ExpenseChart;