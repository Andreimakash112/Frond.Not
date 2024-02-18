import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './views/Main';
import Footer from './components/Footer';
import Basket from './views/Basket';
import ModalBox from './components/ModalBox';
import Login from './components/Login';
import Registration from './components/Registration';
import Cabinet from './views/Cabinet';
import AddProduct from './components/AddProduct';
function App() {

  const[page, setPage] = useState('Main')
  const[modalBox, setModalBox] = useState('none')
  const pages = {
    Main: <Main />,
    Basket: <Basket />,
     Cabinet:<Cabinet />
  }

  const modalBoxes = {
    none: null,
    login: <ModalBox setModalBox={setModalBox}><Login /></ModalBox>,
    Registration: <ModalBox setModalBox={setModalBox}><Registration /></ModalBox>,
    AddProduct: <ModalBox setModalBox={setModalBox}><AddProduct /></ModalBox>
  }
  return (
    <div className="App">
     <Header setPage={setPage} setModalBox={setModalBox} />
     { pages[page] }
     { modalBoxes[modalBox] }
     <Footer />
    </div>
  );
}

export default App;
