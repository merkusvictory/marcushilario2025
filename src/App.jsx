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
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div className="main">
        <Header />
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
        </Routes>
      </div>
    </>
  )
}

export default App
