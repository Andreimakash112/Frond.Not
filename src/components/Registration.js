import React from 'react';


function Registration() {

  return ( 
    <>
      <h1>Регистрация</h1>
       <input id='login' type='text' placeholder=' логин' />
       <input id='password' type='password' placeholder=' пароль' />
       <input id='login' type='email' placeholder='почта' />
       <button>Сохранить</button>
    </>
  );
}

export default Registration;