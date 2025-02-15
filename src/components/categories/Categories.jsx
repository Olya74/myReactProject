import { useContext} from "react";
import { UserContext } from "../../contexts/UserContext";
import "./categories.css";

function Categories() {
  const { state,dispatch} = useContext(UserContext);


  const selectCategory = (category) => {
dispatch({type:'SELECT_CATEGORY',payload:category})
    console.log(category);
  }

  return (
  <ul className="category-list">
      {state.products.length > 0 &&
        state.products.map((product) => (
          <li key={product.id} onClick={()=>selectCategory(product)}>{product.category}</li>
        ))}
    </ul>

    // <ul className="category-list">
    //   {state.products.length > 0 &&
    //     state.products.map((product) => (
    //       <li key={product.id} onClick={()=>selectCategory(product)}>{product.category}</li>
    //     ))}
    // </ul>
  );
}

export default Categories;
