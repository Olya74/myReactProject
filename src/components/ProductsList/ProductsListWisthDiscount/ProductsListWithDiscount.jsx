import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import ProductDiscount5 from "../product/ProductDiscount5";
import ProductDiscount10 from "../product/ProductDiscount10";
import ProductDiscount50 from "../product/ProductDiscount50";
import './productsWithDiscount.css'
function ProductsListWithDiscount() {
  const { state,dispatch } = useContext(UserContext);

  return (
    <>
      <div className="productsWraper">
        {state.currentItems.length > 0 &&
          state.currentItems.map(
            (itemsPr) =>
              Object.keys(itemsPr).includes("items") &&
              itemsPr.items.map(
                (item) =>
                  (item.discount == 5 && (
                    <ProductDiscount5 key={item.id} item={item} dispatch={dispatch}/>
                  )) ||
                  (item.discount == 10 && (
                    <ProductDiscount10 key={item.id} item={item} dispatch={dispatch}/>
                  )) ||
                  (item.discount == 50 && (
                    <ProductDiscount50 key={item.id} item={item}  dispatch={dispatch}/>
                  ))
              )
          )}
      </div>
    </>
  );
}

export default ProductsListWithDiscount;
