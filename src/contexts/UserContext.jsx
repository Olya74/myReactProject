import { createContext, use, useEffect, useReducer } from "react";
import { getUsers } from "../helpers/functions.js";

export const UserContext = createContext(null);

// getUsers("http://localhost:5000/users/");

const getProducts = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`status: ${response.status}`);
    }
    const data = await response.json();
    if (!data) {
      throw new Error("No products found");
    }
  } catch (error) {
    console.error(error);
  }
};

const initialState = {
  isLogginned: false,
  isRegistered: false,
  user: null,
  products: [],
  orders: [],
  total: 0,
  currentItems: [],
};

console.log('IS',initialState);
const reducer = (state, action) => {
console.log('state:',state);
console.log('action:',action);
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        isRegistered: true,
        user: action.payload,
      };
    case "LOG_IN_USER":
      return {
        ...state,
        isLogginned: true,
        user: action.payload,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLogginned: false,
        user: null,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
      case "SET_CURRENT_ITEMS":
        return {
          ...state,
          currentItems: action.payload,
        };
    case "SELECT_CATEGORY":
      return {
        ...state,
        currentItems: state.products.filter(
          (product) =>{
           if(action.payload.category === 'all'){
           return state.products;}
           return  product.category === action.payload.category 
          } 
        ),
      };
    case "ADD_PRODUCT":
   
      //    const isExist = state.order.find((p) => p.id === action.payload.id);
      
   

      // if (isExist) {
      //   return {
      //     ...state,
      //     oder: state.oders.map((p) =>
      //       p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p
      //     ),
      //     total: state.total + parseFloat(action.payload.price.slice(1)),
      //   };
      // } else {
      //   return {
      //     ...state,
      //     oders: [...state.oders, { ...action.payload, quantity: 1 }],
      //     total: state.total + parseFloat(action.payload.price.slice(1)),
      //   };
      // }
    case "DELETE":
      const productToDelete = state.products.find(
        (p) => p.id === action.payload
      );

      if (!productToDelete) return state; // Falls Produkt nicht gefunden wird, gib den aktuellen State zurück.

      if (productToDelete.quantity > 1) {
        // Reduziere nur die Menge um 1
        return {
          ...state,
          products: state.products.map((p) =>
            p.id === action.payload ? { ...p, quantity: p.quantity - 1 } : p
          ),
          total: state.total - parseFloat(productToDelete.price.slice(1)),
        };
      } else {
        // Entferne das Produkt, wenn quantity === 1
        return {
          ...state,
          products: state.products.filter((p) => p.id !== action.payload),
          total: state.total - parseFloat(productToDelete.price.slice(1)),
        };
      }

    default:
      return state;
  }
};
export const UserProvider = ({ children }) => {
 useEffect(() => {
   try {
     const getProducts = async () => {
       const response = await fetch("http://localhost:5000/products");
       if (!response.ok) {
         throw new Error(`status: ${response.status}`);
       }
       const data = await response.json();
       if (!data) {
         throw new Error("No categories found");
       }
      dispatch({ type: "SET_PRODUCTS", payload: data });
       dispatch({ type: "SET_CURRENT_ITEMS", payload: data });
     };
     getProducts();
   } catch (error) {
     console.error(error);
   }
 }, []);

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
