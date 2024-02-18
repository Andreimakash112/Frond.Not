import React, { useState, useEffect } from 'react';
import './Basket.css';
import ProductUser from '../components/ProductUser';
import { jwtDecode } from 'jwt-decode'; // Импортируйте jwtDecode напрямую


function Basket() {
  const [id, setEmail] = useState('');
  const [login, setLogin] = useState('');
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      setEmail(decodedToken.id);
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
    }
  }

 /* function logLoginToConsole() {
    console.log('Логин:', login);
  }*/
  
  return (
    <div className="Basket">
      <h1>КОРЗИНА</h1>
      <h2>Ваши покупки</h2>
      <p>Ваш id: {id}</p>
     
      <p>Логин: {login}</p>
      <div className="MenuBasket">
        <button onClick={removeToken}>ВЫЙТИ</button>
       
      </div>
      <div className="BasketUser">
        <ProductUser />
        <ProductUser />
        <ProductUser />
        <ProductUser />
      </div>
    </div>
  );
}

export default Basket;







