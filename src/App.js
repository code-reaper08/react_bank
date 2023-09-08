
import React from 'react';
import Login from './login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Dashboard  from './dashboard';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Router>
      <ToastContainer /> 
      <Routes>
        <Route exact path="/" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path={"/dashboard"} element={<Dashboard/>}/>
        
        </Routes>
       
    </Router>
    
    
    </div>
  );
}

export default App;
