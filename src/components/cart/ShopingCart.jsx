import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./shopingCart.css";
function ShopingCart() {
  const { state, dispatch } = useContext(UserContext);

  return (
    <div className="cartContainer">
      {state.orders.length > 0 ? (
        <ul className="cart">
          <h3>Your cart:</h3>
          <h3>Total quantity:{state.totalQuantity}</h3>
          <h3>Total: {state.total}</h3>
          <br />

          {state.orders.map((order) => (
            <li key={order.id}>
              {order.name} - {order.quantity} - {order.price}
              <button
                style={{ padding: 0, cursor: "pointer" }}
                onClick={() =>
                  dispatch({ type: "REMOVE_PRODUCT", payload: order.id })
                }
              >
                <i
                  className="fa-solid fa-trash"
                  style={{ textAlign: "end" }}
                ></i>
              </button>
            </li>
          ))}
          <button style={{padding:'1rem 0'}} onClick={()=>dispatch({type:'CLEAR_CART'})}>Clear Cart</button>
        </ul>
      ) : (
        <h2 style={{ marginLeft: "2rem" }}>Cart is empty</h2>
      )}
    </div>
  );
}

export default ShopingCart;
