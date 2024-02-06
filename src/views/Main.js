import React from 'react';
import './Main.css';
import Product from '../components/Product';
import image from '../images/01.jpg'
function Main() { 
  const products = [
  {header: 'Товар 1',image: image,price: 12000 }, 
  {header: 'Товар 1',image: image, price: 14000 },
  
  {header: 'Товар 1',image: image,price: 16000 },
    
  {header: 'Товар 1',image: image, price: 18000 },
    
  {header: 'Товар 1',image: image,price: 20000 },
    
  {header: 'Товар 1',image: image, price: 22000 }
  
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