import React from 'react'
import  './product.css'
import categoriesArr from '../../categoriesArr.js'
function Product() {
  return (
    <>
      {categoriesArr.map(
        (category) =>
          Object.keys(category).includes("items") &&
          category.items.map((item) => (
            <div className="product" key={item.id}>
              <h4>{item.name}</h4>
              {item.img && (
                <img
                  src={item.img[0]}
                  alt={item.name}
                  style={{ width: "100px", height: "100px" }}
                />
              )}
              <p>{item.price}</p>
            </div>
          ))
      )}
    </>
  );
}

export default Product
