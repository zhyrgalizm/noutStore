import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Pages/AboutUs/About';
import Login from './Pages/Auth-scenes/Login/Login';
import Registration from './Pages/Auth-scenes/Regist/Registration';
import Basket from './Pages/Basket/Basket';
import Detail from './Pages/Detail/Detail';
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <div className='app__change'>
      <Header />
      <main className='main__section'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/aboutus' element={<About />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='login' element={<Login />} />
          <Route path='registration' element={<Registration />} />
        </Routes>
      </main>
      <Footer />

    </div>
  );
};

export default App;
