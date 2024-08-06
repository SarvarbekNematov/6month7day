import { createContext, useState } from "react";

const Context = createContext();
const Context_app = ({children}) => {
    const [token , setToken] = useState( false)
    // JSON.parse(window.localStorage.getItem("token")) ||
    // window.localStorage.setItem("token" , JSON.stringify(token))
  return (
    <Context.Provider value={{token , setToken}}>
            {children}
        </Context.Provider>
)
}

export {Context , Context_app}
