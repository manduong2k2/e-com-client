import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Navbar';
import AddProduct from './components/AddProduct';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <body>
          <main>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/AddProduct" exact element={<AddProduct />} />
              <Route path="/login" exact element={<Login />} />
              <Route path="/signup" exact element={<SignUp />} />
            </Routes>
          </main>
        </body>
      </div>
    </Router>
  );
}

export default App;
