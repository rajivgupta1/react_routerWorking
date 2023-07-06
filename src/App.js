import './App.css';
import Navbar from './Components/Layout/Navbar';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';

import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (

    <div className='App'>
  <BrowserRouter>
    <Navbar/>
  <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/contact' element={<Contact/>} />


      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
