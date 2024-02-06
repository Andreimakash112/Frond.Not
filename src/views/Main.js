import React from 'react';
import './Main.css';
import Product from '../components/Product';
import image from '../images/01.jpg'
function Main() { 

  const products = [

  {id:1,  header: 'Товар 1',image: image, price: 12000 }, 
  {id:2,  header: 'Товар 2',image: image, price: 14000 },
  {id:3,  header: 'Товар 3',image: image, price: 16000 },  
  {id:4,  header: 'Товар 4',image: image, price: 18000 }, 
  {id:5,  header: 'Товар 5',image: image, price: 20000 }, 
  {id:6,  header: 'Товар 6',image: image, price: 22000 } 

]
function getProductList() {

  return products.map((item) => <Product key = {item.id} header = {item.header} image = {item.image} price = {item.price} />   )

}


  return (
    <div className="Main">
   {getProductList() }
    </div>
  );
}

export default Main;