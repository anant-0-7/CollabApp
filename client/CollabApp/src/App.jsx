import React from 'react';
import "../public/App.css"
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App () {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
