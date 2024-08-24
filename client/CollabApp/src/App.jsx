import React from 'react';
import HomePage from "./components/HomePage";
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';

function App () {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
