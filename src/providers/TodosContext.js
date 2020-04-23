import React, { createContext, useReducer } from "react";
import todosReducer from "../reducers/todosReducer";

export const TodosContext = createContext();
export const TodosDispatchContext = createContext();

const initialState = [];

const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, initialState);
  return (
    <TodosContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosContext.Provider>
  );
};

export default TodosProvider;
