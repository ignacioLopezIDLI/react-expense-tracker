import { createContext, useContext, useReducer , useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

// Se crea el Contexto
export const Context = createContext();

// Funcion para exportar Context
export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

// Se crea el componente GlobalProvider que acepta un children prop
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState,
    ()=> {
      const localData =  localStorage.getItem("transactions")
      return localData ? JSON.parse(localData) : initialState 
    });

    useEffect(()=>{
      localStorage.setItem("transactions", JSON.stringify(state))
    },[state])

// state AppReducer -> Define operaciones 
// initialState -> Inicializa el estado 
// Funcion para inicilizar el estado Permite cambiar el valor 
// Esta funcion Carga los datos del local si hay
// useEffect cuando cambie estado guarda los cambios en el localStorage




  const addTransaction = (transaction) => {
    dispatch({
        type: "ADD_TRANSACTION",
        payload: transaction // Contiene Datos que quiero agregar
    })
  };

  const deleteTransaction = (id) => {
    dispatch({
        type: "DELETE_TRANSACTION",
        payload: id // Contiene id
    })
  };

  return (
    <Context.Provider 
    value={{ 
        transactions: state.transactions,
        addTransaction,
        deleteTransaction 
      }}    
    >
      {children}
    </Context.Provider>
  );
};
