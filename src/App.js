import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './views/Main';
import Footer from './components/Footer';
import Basket from './views/Basket';
function App() {

  const[page, setPage] = useState('Main')

  const pages = {
    Main: <Main />,
    Basket: <Basket />

  }

  return (
    <div className="App">
     <Header setPage={setPage} />
     { pages[page] }
     <Footer />
    </div>
  );
}

export default App;
