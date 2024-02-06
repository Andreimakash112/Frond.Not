import React from 'react';
import './Main.css';
import Product from '../components/Product';
import image  from '../images/01.jpg'
import image_2 from '../images/02.jpg'
import image_3 from '../images/03.jpg'
import image_4 from '../images/04.jpg'
import image_5 from '../images/05.jpg'
import image_6 from '../images/06.jpg'
import image_7 from '../images/07.jpg'

function Main() { 

  const products = [

  {id:1,  header: 'Товар 1',image: image, price: 12000 }, 
  {id:2,  header: 'Товар 2',image: image_2, price: 14000 },
  {id:3,  header: 'Товар 3',image: image_3, price: 16000 },  
  {id:4,  header: 'Товар 4',image: image_4, price: 18000 }, 
  {id:5,  header: 'Товар 5',image: image_5, price: 20000 }, 
  {id:6,  header: 'Товар 6',image: image_6, price: 22000 }, 
  {id:7,  header: 'Товар 7',image: image_7, price: 25000 } 
  
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