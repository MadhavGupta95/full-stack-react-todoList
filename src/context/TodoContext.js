import { createContext, useState } from "react";

export const TodoContext = createContext()

export const TodoProvider = ({children})=>{
      
      const [todo, setTodo] = useState([{
        id : 1,
        title : "Todo-1",
        completed : false
      },
      {
        id : 2,
        title : "Todo-2",
        completed : false
      },
      {
        id : 3,
        title : "Todo-3",
        completed : false
      }
    ])

    return (
        <TodoContext.Provider value={{todo, setTodo}}>
            {children}
        </TodoContext.Provider>
    )
}
