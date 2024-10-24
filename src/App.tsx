import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import LoginPage from './pages/LoginPage.js'
import './App.css'

function App() {

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
