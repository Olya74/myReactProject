import { createContext, useEffect, useReducer } from "react";


//  return {
//    ...state,
//    users: [
//      ...state.users,
//      {
//        name: action.payload,
//        isLoggined: true,
//      },
//    ],
//  };
    
export const UserContext = createContext(null);


const initialState = {
  users:[],
};


const reducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN_USER":
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
