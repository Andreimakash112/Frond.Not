import React from 'react';
import './Header.css';
import UserBox from './UserBox';
function Header({setPage}) {
  function changePage(){
    setPage('Basket')
  }
  return (
    <div className="Header">
      <ul>
        <li onClick={()=>setPage('Main')}>Главная</li>
        <li onClick={changePage}>корзина</li>
      </ul>
      <UserBox />
    </div>
  );
}

export default Header;