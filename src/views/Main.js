import React from 'react';
import './Main.css';
import Product from '../components/Product';
import image from '../images/01.jpg'
function Main() {
const Products = [
  {
    header: 'Товар 1',
    image: image,
    price: 120
  },
]


  return (
    <div className="Main">
     <Product image = {image} /> 
     <Product image = {image} />
     <Product image = {image} />
     <Product image = {image} />
     <Product image = {image} />
     <Product image = {image} />
    </div>
  );
}

export default Main;