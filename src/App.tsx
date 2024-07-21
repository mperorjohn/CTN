// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ForgotPassword from './pages/ForgotPassword';
import Reset from './pages/Reset';
import NewPassword from './pages/NewPassword';


const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path='/reset' element={<Reset/>}> </Route>
          <Route path='/NewPassword' element={<NewPassword/>}></Route>
        </Routes>
    </Router>
  );
};

export default App;
