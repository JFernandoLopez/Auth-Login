import { useState } from 'react';
import Login from './components/login/Login';
import Home from './components/home/Home';
import { useLocation } from 'react-router-dom';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
const {pathname} = useLocation()
  return (
      <div>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </div>
  )
}

export default App
