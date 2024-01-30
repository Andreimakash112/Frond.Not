import React from 'react';
import './Header.css';
import UserBox from './UserBox';
function Header({setPage, setModalBox}) {

  return (
    <div className="Header">
      <ul>
        <li onClick={()=>setPage('Main')}>Главная</li>
        <li onClick={()=>setPage('Basket')}>корзина</li>
      </ul>
      <UserBox setModalBox={setModalBox} />
    </div>
  );
}

export default Header;