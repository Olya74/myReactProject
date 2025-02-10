import React from 'react'
import  './product.css'
import img from "../../../assets/images/Australia_1.jpg";
function Product() {
  return (
    <div className="product ">
      <h3>pillow</h3>
      <img src={img} alt="" />
    </div>
  );
}

export default Product
