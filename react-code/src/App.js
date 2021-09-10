import React, {useState} from 'react';
import './App.css';
import Modal from './components/Modal';
import RouteTest from './components/RouteTest';
import Contents from './components/Contents';

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
    <div className="App">
      <nav className="nav">
        <h1>React test page</h1>
      </nav>
      <RouteTest></RouteTest>
      <input type="button" value="button"/>
      <Contents/>
      {/* 컴포넌트는 대분자로 시작해야한다. */}
      <Modal/>
      {/* <Modal></Modal> */}
    </div>
  );
}


export default App;