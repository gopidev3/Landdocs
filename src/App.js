import React,{Component} from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';


function App() {
  return (
    <div className="App">
      <div className = "Nav">
         <NavBar/>
        </div>
        <Home/>
      </div>
  );
}

export default App;
