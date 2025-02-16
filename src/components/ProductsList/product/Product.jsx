import {useContext} from 'react'
import { UserContext } from '../../../contexts/UserContext'
import  './product.css'


function Product() {
  const { state,dispatch } = useContext(UserContext);
  return (
    <div className="productsWraper">
      {state.currentItems.length > 0 &&
        state.currentItems.map(
          (itemsPr) =>
            Object.keys(itemsPr).includes("items") &&
            itemsPr.items.map((item) => (
              <div className="product" key={item.id}>
                <h6>{item.name}</h6>
                {item.img && <img src={item.img[0]} alt={item.name} />}
                <p>{item.price}</p>
                <button
                  onClick={() =>
                    dispatch({ type: "ADD_PRODUCT", payload: item })
                  }
                >
                  Add to cart
                </button>
              </div>
            ))
        )}
    </div>
    
  );
}

export default Product
