import React, {useState} from 'react';
import './MainSection.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams
} from "react-router-dom";

function MainSection(){
    return(
    <>
    <div className="main">
      <h1 className="main-title">
        <span><Link to="/" className="main-title__dk">dk</Link><span className="main-title__w">_w</span>_rld.</span>
        <span className="main-title__o">o</span>
      </h1>
      <div className="main-guide">
        <Link to="/">more info</Link>
      </div>
    </div>
    </>
    );
  }

  export default MainSection;