
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
/*import Carousel from './components/Carousel';
import Banner from './components/Banner';
import Cards1 from './components/Cards1';
import Cards2 from './components/Cards2';
import Images from './components/Images';   */
import Whatsapp from './components/Whatsapp';
import Footer from './components/Footer';
import { useState } from 'react';
import Eyeglasses from './components/Eyeglasses';
//import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
    }
    else {
      setMode('dark');
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/Eyeglasses" element={<Eyeglasses />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/*<Home/>*/}
      {/*<Eyeglasses/>*/}
      <Whatsapp />
      <Footer />
    </>
  );
}

export default App;
