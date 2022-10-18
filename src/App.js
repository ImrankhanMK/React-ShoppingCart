import React, {useState} from 'react';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import WelcomeUser from './components/WelcomeUser';



function App() {
  
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/welcomeuser' element={<WelcomeUser />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
