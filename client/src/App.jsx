import React, { useState, useEffect, useContext } from 'react';
import Login from './components/login/Login';
import Home from './components/home/Home';
import SignUp from './components/signUp/SignUp'
import Nav from './components/nav/Nav'
import Protected from './components/protected/Protected'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import './App.css';
import { Routes, Route } from 'react-router-dom';

export const UserContext = React.createContext([])

function App(){
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const {pathname} = useLocation()

  const logOut = async() => {

  }


  //First thing, get a new accesstoken if a refreshtoken exist
  useEffect(() => {
    const checkRefreshToken = async () => {
      try {
        const response = await (axios.post('http://localhost:3001/refresh_token', {}, {
          withCredentials: true,
          headers: {
          'Content-Type': 'application/json',
        }})).data
        setUser({
          accesstoken: response.accesstoken,
        });
        setLoading(false);
      } catch (error) {
        throw alert(error)
    }}
        
    checkRefreshToken();
  }, [])

  if(loading) return <div>Loading...</div>

  return (
    
      <UserContext.Provider value={[user, setUser]}>
      <div>
        {pathname != "/login" && <Nav logOut={logOut}/>}
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home />}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </div>
      </UserContext.Provider>
  )
}

export default App
