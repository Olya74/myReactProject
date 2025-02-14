import { createContext, useEffect, useReducer } from "react";
import { getUsers } from "../helpers/functions.js";

export const UserContext = createContext(null);

// getUsers("http://localhost:5000/users/");

const initialState = {
  users: [],
};


const reducer = (state, action) => {
console.log('state:',state);
console.log('action:',action);
  switch (action.type) {
    case "LOG_IN_USER":{
  const user=action.payload;
    }
    
    default:
      return state;
  }
};
export const UserProvider = ({ children }) => {

  const [users, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
