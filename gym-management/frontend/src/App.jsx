import {useState} from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import {Greet} from "../wailsjs/go/main/App";
import Outlet from './component/outlet';
import Sidebar from './component/sidebar';

function App() {
  
    return (
        <div id="App" className='h-full'>
          <Outlet/>
        </div>
    )
}

export default App
