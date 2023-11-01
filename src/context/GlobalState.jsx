import {createContext,useContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: []
}

// Se crea el Contexto
export const Context = createContext()

// Funcion para exportar Context 
export const useGlobalState = () => {
    const context = useContext(Context)
    return context  
}

// Se crea el componente GlobalProvider que acepta un children prop
export const  GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState) 


    return(
        <Context.Provider value={{transactions:state.transactions}}>
            {children}
        </Context.Provider>
    )
}