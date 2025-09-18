import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";import Home from './pages/Home';
import './App.css'
import AuthPage from './pages/AuthPage';
import { Outlet } from '@tanstack/react-router'
import Navbar from './components/NavBar.jsx'

export default function App() {
useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
<>
{/* <Home/> */}
<Navbar/>
      <Outlet/>
</>
  );
}
