import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Blobtopia from './pages/Blobtopia'
import Header from './components/Header'
import SteamPunch from './pages/SteamPunch'
import AwkwardCow from './pages/AwkwardCow'
import Bookstore from './pages/Bookstore'
import HeartLEDR from './pages/HeartLEDR'
import Library from './pages/Library'
import Vex from './pages/VEX'
import Marble from './pages/Marble'
import Sniper from './pages/Sniper'
import './App.css'

function App() {

  // COLLAPSE BUTTON HANDLING
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <Navbar isMobile={isMobile} toggleCollapse={toggleCollapse} isCollapsed={isCollapsed}/>
      <div className={`main ${isCollapsed ? '' : 'collapsed'}`}>
        <Header isMobile={isMobile} toggleCollapse={toggleCollapse}/>
        <Routes>
          <Route path="/" element={
            <Home />
          } />
          <Route path="/blobtopia" element={
            <Blobtopia />
          } />
          <Route path="/steampunch" element={
            <SteamPunch />
          } />
          <Route path="/awkwardcow" element={
            <AwkwardCow />
          } />
          <Route path="/bookstore" element={
            <Bookstore />
          } />
          <Route path="/heartledr" element={
            <HeartLEDR />
          } />
          <Route path="/library" element={
            <Library />
          } />
          <Route path="/vex" element={
            <Vex />
          } />
          <Route path="/marble" element={
            <Marble />
          } />
          <Route path="/sniper" element={
            <Sniper />
          } />
        </Routes>
      </div>
    </>
  )
}

export default App
