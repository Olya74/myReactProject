import { useContext ,useState} from "react";
import { UserContext } from "../../../contexts/UserContext";
import "./product.css";
import ProductAll from "./ProductAll";


function Product() {
  const { state, dispatch } = useContext(UserContext);
 
  return (
    <div className="productsWraper">
      {state.currentItems.length > 0 &&
        state.currentItems.map(
          (itemsPr) =>
            Object.keys(itemsPr).includes("items") &&
            itemsPr.items.map((item) => (
            <ProductAll key={item.id} item={item} dispatch={dispatch}/>
            ))
        )}
    </div>
  );
}

export default Product;
