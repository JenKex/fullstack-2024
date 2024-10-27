import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import LoginPage from './pages/LoginPage.js'
import './App.css'
import { Chatroom } from "./pages/Chatroom.js";

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage/>}/>
        <Route path="chatroom/*" element={<Chatroom/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
