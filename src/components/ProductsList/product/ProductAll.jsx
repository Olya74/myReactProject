import React from 'react'

function ProductAll({item,dispatch}) {
  return (
    
      <div className="product" key={item.id}>
        <h6>{item.name}</h6>
        {item.img && <img src={item.img[0]} alt={item.name} />}
        <p>{item.price}</p>
        <button
          onClick={() => dispatch({ type: "ADD_PRODUCT", payload: item })}
        >
          Add to cart
        </button>
      </div>
  
  );
}

export default ProductAll
