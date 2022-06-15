import './App.css';
import React from 'react'
import MiddleBar from './components/MiddleBar';
import Menu from './components/Menu';
import LeftBar from './components/LeftBar';
import ConsumChart from './components/ConsumChart';

function App() {
  return (
    <div className='container'>
      <div className='main-page'>
      <span className='title'>صفحه اصلی</span>
        <Menu/>
        <MiddleBar/>
        <LeftBar/>
      </div>

    </div>
  )
}

export default App