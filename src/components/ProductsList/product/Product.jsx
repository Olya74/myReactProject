import React from 'react'
import  './product.css'
import categoriesArr from '../../categoriesArr.js'
function Product() {
  return (
    <div className="productsWraper">
      {categoriesArr.map(
        (category) =>
          Object.keys(category).includes("items") &&
          category.items.map((item) => (
            <div className="product" key={item.id}>
              <h6>{item.name}</h6>
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
    </div>
  );
}

export default Product
