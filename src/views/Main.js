import React from 'react';
import './Main.css';
import Product from '../components/Product';
import image from '../images/01.jpg'
function Main() {
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