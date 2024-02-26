import React, {useState,useEffect} from 'react';
import './Main.css';
import Product from '../components/Product';
/*import image  from '../images/01.jpg'
import image_2 from '../images/02.jpg'
import image_3 from '../images/03.jpg'
import image_4 from '../images/04.jpg'
import image_5 from '../images/05.jpg'
import image_6 from '../images/06.jpg'
import image_7 from '../images/07.jpg'*/

function Main({setBasket, setBasketPrice, setBasketQty, basket, setMessage, setModalBox, token,setProductData}) { 
  const[products, setProducts] = useState([])
 
  useEffect(() => {

   const api = 'http://127.0.0.1:9001/products'

  fetch(api)
  .then(result => result.json())
  .then((result) => {
    console.log(result)
    setProducts(result.data)
  }) 
  }, [])
  


  return (
    <div className="Main">
  


  
      {products.map((item) => <Product key={item._id} id={item._id} image={item.image}
        header={item.header} price={item.price} setBasket={setBasket}
        setBasketPrice={setBasketPrice} setBasketQty={setBasketQty}
      basket={basket} setMessage={setMessage} setModalBox={setModalBox} token={token}setProductData={setProductData}   />)}
      



      
    </div>
  );





}

export default Main;