import React from 'react';
import './CartBox.css';

function CartBox({ setModalBox, setMessage, setBasket, setBasketQty, setBasketPrice }) {
    function order() {
        const cardNum = document.getElementById('cardNum').value
        const cardExp = document.getElementById('cardExp').value
        const cvc = document.getElementById('cvc').value

        const validNum = cardNum.match(/^\d{12,16}$/)
        const validExp = cardExp.match(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)
        const validCvc = cvc.match(/^[0-9]{3,4}$/)

        if (!validNum || !validExp || !validCvc) {
            document.getElementById('Error').innerText = "Вы ввели неверные данные !"
            return
        }

        setTimeout(() => {
            setBasket([])
            setBasketQty(0)
            setBasketPrice(0)
            setMessage('Заказ успешно оформлен!')
            setModalBox('MessageBox')
        }, 100)
    }


    return (
        <div className="CartBox">
            <h1> Данные карты</h1>
            <input id='cardNum' placeholder='Номер карты' type='text' />
            <input id='cardExp' placeholder='Срок действия' type='text' />
            <input id='cvc' placeholder='CVC-код' type='text' />
            <button id='send' onClick={() => order()}>Оформить заказ</button>
            <p id='Error'></p>
        </div>
    );
}

export default CartBox;