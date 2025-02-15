import { useContext } from "react";
import { userContext } from "../../contexts/UserContext";

function ShoppingCart() {
  const { state, dispatch } = useContext(userContext);

  const quantityTotal = state.oder.reduce((acc, p) => acc + p.quantity, 0);

  return (
    <div id="cart">
      <h2>Shopping Cart</h2>
      <div>
        {state.oder.length > 0 && (
          <h2>
            {" "}
            {quantityTotal} products in your cart ,total price: $
            {state.total.toFixed(2)} €
          </h2>
        )}
      </div>
      {state &&
        state.oder.map((p) => (
          <div key={p.id}>
            {p.productName}: {p.quantity} x {p.price}
            <input
              type="checkbox"
              onClick={() => dispatch({ type: "DELETE", payload: p.id })}
            />
          </div>
        ))}
    </div>
  );
}

export default ShoppingCart;
