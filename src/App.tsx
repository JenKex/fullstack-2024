import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage'
import { useState } from 'react'
import './App.css'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
