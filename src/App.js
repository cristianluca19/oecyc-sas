import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/login/login";
import Navbar from './components/navbar/navbar';
import Home from './components/home/home'
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Route path ='/' render={()=> <Navbar/>}/>
      <Route extact path='/login' render={() => <Login />} />
      <Route extact path='/home' render={()=> <Home/>}/>
    </div>
  );
}

export default App;
