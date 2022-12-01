import React from 'react'
import Navbar from './Components/Navbar'
import "./App.css";
import Banner from './Components/Banner';
import RowPost from './Components/RowPost';
import {action,originals} from "./url"
function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={action} title="Action" isSmall/>
    </div>
  )
}

export default App
