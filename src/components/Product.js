import React from 'react';
import './Product.css';

function Product({image}) {
  return (
    <div className="Product">
      <img src = {image}/>
      <h1>Товар</h1>
      <p>{ `${120} руб` }</p>
      <button> В корзину </button>
    </div>
  );
}

export default Product;