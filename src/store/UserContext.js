import { useContext,createContext,useReducer } from "react";

 export  const  ContextStore=   createContext({})



 export   const ContextProvider=({ reducer,children,initialState})=>(
   <ContextStore.Provider value={useReducer(reducer,initialState)}>
    {children}
    </ContextStore.Provider>


)
  
export const useContextDATA=()=>useContext(ContextStore)