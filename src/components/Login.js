import React from 'react';


function Login() {

 function Log() {
    const login = document.getElementById('login').value
    const password = document.getElementById('password').value
    const data = {
        login:login,
        password:password
    }
    debugger
    console.log(data) 
 }
  return ( 
    <>
      <h1>Авторизация</h1>
       <input id='login'type='text' placeholder='введите логин' />
       <input id='password' type='password' placeholder='введите пароль' />
       <button onClick={Log}>войти</button>
    </>
  );
}

export default Login;