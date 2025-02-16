import React from 'react'

function ProductsListWithDiscount() {
    const { state,dispatch } = useContext(UserContext);
    const getProductsWithDiscount = async () => {
        try {
          const response = await fetch("http://localhost:5000/discount");
          if (!response.ok) {
            throw new Error(`status: ${response.status}`);
          }
          const data = await response.json();
          if (!data) {
            throw new Error("No products found");
          }
          dispatch({ type: "SET_DISCOUNT", payload: data });
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <div>
      
    </div>
  )
}

export default ProductsListWithDiscount
