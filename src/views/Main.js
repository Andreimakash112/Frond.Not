import React from 'react';
import './Main.css';
import Product from '../components/Product';
import image from '../images/01.jpg'
function Main() {
  return (
    <div className="Main">
     <Product /> 
     <Product />
     <Product />
     <Product />
     <Product />
     <Product />
    </div>
  );
}

export default Main;