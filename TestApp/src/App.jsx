import React from 'react'
import './App.css'
import Home from './components/Home/Home'
import Login from './components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Login/signUp';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </Router>
  )
}

export default App