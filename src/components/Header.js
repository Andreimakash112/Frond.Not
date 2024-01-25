import React from 'react';
import './Header.css';

function Header({setPage}) {
  function changePage(){
    setPage('Basket')
  }
  return (
    <div className="Header">
      <ul>
        <li onClick={changePage}>корзина</li>
      </ul>
    </div>
  );
}

export default Header;