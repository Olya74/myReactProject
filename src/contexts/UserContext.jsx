import { createContext, useReducer } from "react";
export const UserContext = createContext(null);

const initialState = {
  users: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: state.users.length + 1,
            name: action.payload,
            isRegstered: true,
          },
        ],
      };
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
