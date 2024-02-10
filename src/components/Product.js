import React from 'react';
import './Product.css';

function Product({header,image,price}) {
  return (
    <div className="Product">
      <img  alt = ""src = {image}/>
      <h1>{header}</h1>
      <p>{ `${price} руб` }</p>
      <button> В корзину </button>
    </div>
  );
}

export default Product;