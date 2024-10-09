import {useState} from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import {Greet} from "../wailsjs/go/main/App";
import Outlet from './component/outlet';

function App() {
  
    return (
        <div id="App">
          <Outlet/>
        </div>
    )
}

export default App
