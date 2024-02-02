import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './views/Main';
import Footer from './components/Footer';
import Basket from './views/Basket';
import ModalBox from './components/ModalBox';
import Login from './components/Login';
function App() {

  const[page, setPage] = useState('Main')
  const[modalBox, setModalBox] = useState('none')
  const pages = {
    Main: <Main />,
    Basket: <Basket />

  }

  const modalBoxes = {
    none: null,
    login: <ModalBox setModalBox={setModalBox}><Login /></ModalBox>,
    registration: <ModalBox setModalBox={setModalBox}></ModalBox>
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
