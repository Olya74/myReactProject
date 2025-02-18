import { createContext, use, useEffect, useReducer } from "react";

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
  isEmpty: true,
  totalQuantity: 0,
  discount: [],
  discountAll: [],
  odersDiscount: [],
};

const reducer = (state, action) => {
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
        currentItems: state.products.filter((product) => {
          if (action.payload.category === "all") {
            return state.products;
          }
          return product.category === action.payload.category;
        }),
      };
    // case "SEARCH":
    //   return {
    //     ...state,
    //     currentItems: state.currentItems.map((itemsPr) =>
    //       Object.keys(itemsPr).map((item) => item === action.payload)
    //     ),
    //   };
    case "ADD_PRODUCT": {
      if (state.orders.length === 0) {
        return {
          ...state,
          orders: [{ ...action.payload, quantity: 1 }],
          total: parseFloat(action.payload.price.slice(1)),
          isEmpty: false,
          totalQuantity: 1,
        };
      } else {
        const existingProduct = state.orders.find(
          (p) => p.id === action.payload.id
        );

        if (existingProduct) {
          return {
            ...state,
            orders: state.orders.map((p) =>
              p.id === action.payload.id
                ? { ...p, quantity: p.quantity + 1 }
                : p
            ),
            total: state.total + parseFloat(action.payload.price.slice(1)),
            isEmpty: false,
            totalQuantity: state.totalQuantity + 1,
          };
        } else {
          return {
            ...state,
            orders: [...state.orders, { ...action.payload, quantity: 1 }],
            total: state.total + parseFloat(action.payload.price.slice(1)),
            isEmpty: false,
            totalQuantity: state.totalQuantity + 1,
          };
        }
      }
    }
    case "ADD_PRODUCT_5": {
      if (state.orders.length === 0) {
        return {
          ...state,
          orders: [{ ...action.payload, quantity: 1 }],
          total:
            parseFloat(action.payload.price.slice(1)) -
            parseFloat(action.payload.price.slice(1)) * 0.05,
          isEmpty: false,
          totalQuantity: 1,
        };
      } else {
        const existingProduct = state.orders.find(
          (p) => p.id === action.payload.id
        );

        if (existingProduct) {
          return {
            ...state,
            orders: state.orders.map((p) =>
              p.id === action.payload.id
                ? { ...p, quantity: p.quantity + 1 }
                : p
            ),
            total:
              state.total +
              (parseFloat(action.payload.price.slice(1)) -
                parseFloat(action.payload.price.slice(1)) * 0.05),
            isEmpty: false,
            totalQuantity: state.totalQuantity + 1,
          };
        } else {
          return {
            ...state,
            orders: [...state.orders, { ...action.payload, quantity: 1 }],
            total:
              state.total +
              (parseFloat(action.payload.price.slice(1)) -
                parseFloat(action.payload.price.slice(1)) * 0.05),
            isEmpty: false,
            totalQuantity: state.totalQuantity + 1,
          };
        }
      }
    }
    case "ADD_PRODUCT_10": {
      if (state.orders.length === 0) {
        return {
          ...state,
          orders: [{ ...action.payload, quantity: 1 }],
          total:
            parseFloat(action.payload.price.slice(1)) -
            parseFloat(action.payload.price.slice(1)) * 0.1,
          isEmpty: false,
          totalQuantity: 1,
        };
      } else {
        const existingProduct = state.orders.find(
          (p) => p.id === action.payload.id
        );

        if (existingProduct) {
          return {
            ...state,
            orders: state.orders.map((p) =>
              p.id === action.payload.id
                ? { ...p, quantity: p.quantity + 1 }
                : p
            ),
            total:
              state.total +
              (parseFloat(action.payload.price.slice(1)) -
                parseFloat(action.payload.price.slice(1)) * 0.1),
            isEmpty: false,
            totalQuantity: state.totalQuantity + 1,
          };
        } else {
          return {
            ...state,
            orders: [...state.orders, { ...action.payload, quantity: 1 }],
            total:
              state.total +
              (parseFloat(action.payload.price.slice(1)) -
                parseFloat(action.payload.price.slice(1)) * 0.1),
            isEmpty: false,
            totalQuantity: state.totalQuantity + 1,
          };
        }
      }
    }
    case "ADD_PRODUCT_50": {
      if (state.orders.length === 0) {
        return {
          ...state,
          orders: [{ ...action.payload, quantity: 1 }],
          total:
            parseFloat(action.payload.price.slice(1)) -
            parseFloat(action.payload.price.slice(1)) * 0.5,
          isEmpty: false,
          totalQuantity: 1,
        };
      } else {
        const existingProduct = state.orders.find(
          (p) => p.id === action.payload.id
        );

        if (existingProduct) {
          return {
            ...state,
            orders: state.orders.map((p) =>
              p.id === action.payload.id
                ? { ...p, quantity: p.quantity + 1 }
                : p
            ),
            total:
              state.total +
              (parseFloat(action.payload.price.slice(1)) -
                parseFloat(action.payload.price.slice(1)) * 0.5),
            isEmpty: false,
            totalQuantity: state.totalQuantity + 1,
          };
        } else {
          return {
            ...state,
            orders: [...state.orders, { ...action.payload, quantity: 1 }],
            total:
              state.total +
              (parseFloat(action.payload.price.slice(1)) -
                parseFloat(action.payload.price.slice(1)) * 0.5),
            isEmpty: false,
            totalQuantity: state.totalQuantity + 1,
          };
        }
      }
    }
    case "REMOVE_PRODUCT": {
      const product = state.orders.find((p) => p.id === action.payload);
      if (product.quantity === 1) {
        return {
          ...state,
          orders: state.orders.filter((p) => p.id !== action.payload),
          total: state.total - parseFloat(product.price.slice(1)),
          totalQuantity: state.totalQuantity - 1,
          isEmpty: state.orders.length === 1 ? true : false,
        };
      } else {
        return {
          ...state,
          orders: state.orders.map((p) =>
            p.id === action.payload ? { ...p, quantity: p.quantity - 1 } : p
          ),
          total: state.total - parseFloat(product.price.slice(1)),
          totalQuantity: state.totalQuantity - 1,
        };
      }
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
