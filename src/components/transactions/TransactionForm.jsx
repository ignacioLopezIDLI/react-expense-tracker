import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionForm() {
  // Utiliza el hook personalizado useGlobalState para obtener la función addTransaction del contexto global
  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState(); // Declara el estado local description
  const [amount, setAmount] = useState(0); // Declara el estado local amount con valor inicial de 0

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      // Aca paso los valores de transaction
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });
    console.log(description, amount);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresa la Descripcion"
          onChange={(e) => {setDescription(e.target.value)}}
          className="bg-zinc-700 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        ></input>

        <input
          type="number"
          step={"0.01"}
          placeholder="00.00"
          onChange={(e) => {setAmount(e.target.value)}}
          className="bg-zinc-700 text-white px-3 py-2 rounded-lg block mb-2 w-full"

        ></input>
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block  mb-2 w-full">Agregar Transacción</button>
      </form>
    </div>
  );
}

export default TransactionForm;
