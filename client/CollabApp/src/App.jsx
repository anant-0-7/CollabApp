import React, { useEffect } from 'react';
import "../public/App.css"
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import ProtectRoute from './components/auth/ProtectRoute';
import axios from 'axios';
import { userExists, userNotExists } from './redux/reducers/auth';

function App () {
  const {user}=useSelector((state)=>state.auth);
  const dispatch=useDispatch();
  useEffect(()=>{
    axios
    .get(`http://localhost:3000/user/me`,{withCredentials: true })
    .then(({data})=>dispatch(userExists(data.UserData)))
    .catch((err)=>dispatch(userNotExists()))
  },[dispatch]);
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<ProtectRoute user={!user} redirect='/all'><Login/></ProtectRoute>}/>
        <Route path="/signup" element={<ProtectRoute user={!user} redirect='/all'><Signup/></ProtectRoute>} />
        <Route path="/all" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
