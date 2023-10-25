import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {useNavigate} from 'react-router-dom';

import { Button } from 'primereact/button';
        
function App() {
  const navigate = useNavigate();
  const handleOnClick = () => navigate('/login');

  return (
    <>

    <header className='Navbar'>
    <h1>Gear Guard</h1>
      <ul>DUlla julia</ul>
      <ul>Fredskie</ul>
      <ul>Zackurberg</ul>
    </header>
    
    <Button label="Login" onClick={handleOnClick}>

    </Button></>
  )
}

export default App
