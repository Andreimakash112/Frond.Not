import React from 'react';


function Registration() {

  return ( 
    <>
      <h1>Регистрация</h1>
       <input id='Login' type='text' placeholder='Придумайте логин' />
       <input id='password' type='password' placeholder='Придумайте пароль' />
       <input id='email' type='email' placeholder='Ваша почта' />
       <button>Сохранить</button>
    </>
  );
}

export default Registration;