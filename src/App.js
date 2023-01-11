import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Issuer from './pages/Issuer';
import Setting from './pages/Setting';
import Users from './pages/Users';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Router>
        <Sidebar>
         <Routes>

            <Route path="/" element={<Dashboard/>} />
            <Route exact path="/" element={<Dashboard/>} />
            <Route path="/issuer" element={<Issuer/>} />
            <Route path="/setting" element={<Setting/>} />
            <Route path="/users" element={<Users/>} />

          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
