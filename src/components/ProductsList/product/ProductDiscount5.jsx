import React from 'react'


function ProductDiscount5({ item, dispatch }) {
  return (
    <div className='discount'>
      <h2>Discount 5%</h2>
      <div className="product">
        <h6>{item.name}</h6>
        {item.img && <img src={item.img[0]} alt={item.name} />}
        <p>{item.price}</p>
        <button
          onClick={() => dispatch({ type: "ADD_PRODUCT", payload: item })}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDiscount5
