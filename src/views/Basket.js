import React, { useState, useEffect } from 'react';
import './Basket.css';
import ProductBasket from '../components/ProductBasket';
import { jwtDecode } from 'jwt-decode'; 

function Basket({ basket, setBasket, basketPrice, setBasketPrice, basketQty, setBasketQty, setModalBox }) {//
 
  const [login, setLogin] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      
      setLogin(decodedToken.login);
      console.log('Декодированный токен:', decodedToken);
    }
  }, []);

  function removeToken() {
    const token = localStorage.getItem('token');
    if (token === null) {
      alert('ВЫ НЕ ОБНОВИЛИ СТРАНИЦУ! Обновите страницу, чтобы выйти.');
    } else {
      alert('Обновите страницу, чтобы выйти.');
      localStorage.removeItem('token');
      window.location.reload();


    }
  } 





  function OrderButton() {
    if (basketQty > 0) {
      return (<><button className="order" onClick={() => setModalBox('OrderBox')}>Оформить заказ</button></>)
    }
  }

  return (
    <div className="Basket">
      <h1>Корзина</h1>

          <div className='UserName'>
            <h3>Здравствуйте : {login}</h3>
            <p> Товаров в корзине: {basketQty}</p>
            <p>Общая стоимость товаров: {basketPrice}</p>
           
      <OrderButton />        <button  onClick={removeToken}>ВЫЙТИ</button>

          </div> 
          <div className="BasketContent">
        {basket.map((item) => <ProductBasket key={item.id} id={item.id}
          image={item.image} header={item.header}
          price={item.price} setBasket={setBasket}
          setBasketPrice={setBasketPrice}
          setBasketQty={setBasketQty} />)}
      </div>
      
    </div>
  );
}
 
  

    


export default Basket;



