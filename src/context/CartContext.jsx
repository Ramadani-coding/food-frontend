import { createContext, useContext, useReducer } from "react";

const CartsContext = createContext(null);

const CartsDispatchContext = createContext(null);

function cartsReducer(state, action) {
  switch (action.type) {
    case "add": {
      const index = state.findIndex((obj) => obj.id === action.payload.id);
      if (index === -1) {
        return [...state, { ...action.payload, quantity: 1 }];
      } else {
        return state.map((obj) => {
          if (obj.id === action.payload.id) {
            return { ...obj, quantity: obj.quantity + 1 };
          } else {
            return obj;
          }
        });
      }
    }
    case "decsrease": {
      const index = state.findIndex((obj) => obj.id === action.payload.id);
      if (index !== -1) {
        if (state[index].quantity === 1) {
          return state.filter((obj) => obj.id !== action.payload.id);
        } else {
          return state.map((obj) => {
            if (obj.id === action.payload.id) {
              return { ...obj, quantity: obj.quantity - 1 };
            } else {
              return obj;
            }
          });
        }
      }
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialState = [];

const CartProvider = ({ children }) => {
  const [carts, dispatch] = useReducer(cartsReducer, initialState);

  return (
    <CartsContext.Provider value={carts}>
      <CartsDispatchContext.Provider value={dispatch}>
        {children}
      </CartsDispatchContext.Provider>
    </CartsContext.Provider>
  );
};

export function useCarts() {
  return useContext(CartsContext);
}

export function useCartsDispatch() {
  return useContext(CartsDispatchContext);
}

export default CartProvider;
