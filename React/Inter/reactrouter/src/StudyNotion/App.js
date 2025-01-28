import React, { useState } from 'react';
import Navbar from './components/Navbar' ;
import { Routes , Route} from 'react-router';
import Home from './pages/Home' ;
import Dashboard from './pages/Dashboard' ;
import Login from './pages/Login' ;
import Signup from './pages/Signup' ;
import PrivateRoute from './components/PrivateRoute';

const App = () => {

    const [isLoggedIn , setIsLoggedIn] =useState(false) ;

    
  return (
    <div className='w-screen min-h-screen
      bg-[#000814] flex flex-col '>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path='/dashboard' element={

          <PrivateRoute isLoggedIn={isLoggedIn} >
            <Dashboard/>
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  )
}

export default App
