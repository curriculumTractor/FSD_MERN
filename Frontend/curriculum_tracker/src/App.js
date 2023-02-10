import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Admin from './Components/Admindashboard/Admin';
import User from './Components/Userdashboard/User';
import React from 'react';

import Message from './Components/Chatroom/Message';
import Profile from './Components/Profile/Profile';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/admin' exact element={<Admin />} />
        <Route path='/user' exact element={<User />} />
        <Route path='/profile' exact element={<Profile />} />
        <Route path='/message' exact element={<Message />} />
       
       




      </Routes>
    </BrowserRouter>
  );
}

export default App;
