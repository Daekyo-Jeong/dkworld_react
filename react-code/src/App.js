import React, {useState} from 'react';
import './App.css';
// import MainSection from './components/MainSection';
// import RouteTest from './components/RouteTest';
// import Contents from './components/Contents';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams
} from "react-router-dom";

function App() {

  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </Router>
      {/* <nav className="nav">
        <h1>React test page</h1>
      </nav> */}
      
      {/* <RouteTest></RouteTest>
      <input type="button" value="button"/> */}
      {/* <Contents/> */}
      {/* 컴포넌트는 대분자로 시작해야한다. */}
      {/* <Modal/> */}
      {/* <Modal></Modal> */}
    </>
  );
}


export default App;