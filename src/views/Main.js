import React from 'react';
import './Main.css';
import Product from '../components/Product';
import image from '../images/01.jpg'
function Main() { 

  const products = [

  {header: 'Товар 1',image: image, price: 12000 }, 
  {header: 'Товар 2',image: image, price: 14000 },
  {header: 'Товар 3',image: image, price: 16000 },  
  {header: 'Товар 4',image: image, price: 18000 }, 
  {header: 'Товар 5',image: image, price: 20000 }, 
  {header: 'Товар 6',image: image, price: 22000 } 

]
function getProductList() {

  return products.map((item) => <Product header = {item.header} image = {item.image} price = {item.price} />   )

}


  return (
    <div className="Main">
   {getProductList() }
    </div>
  );
}

export default Main;