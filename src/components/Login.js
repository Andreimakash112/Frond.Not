import React from 'react';


function Login() {

  return ( 
    <>
      <h1>Авторизация</h1>
       <input id='login'type='text' placeholder='введите логин' />
       <input id='password' type='password' placeholder='введите пароль' />
       <button>войти</button>
    </>
  );
}

export default Login;