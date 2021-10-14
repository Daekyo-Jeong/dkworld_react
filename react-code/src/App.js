import React from 'react';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Works from './components/pages/Works';
import Work01 from './components/pages/Works/Work01';
import Work02 from './components/pages/Works/Work02';
import About from './components/pages/About';
import Lab from './components/pages/Lab';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // NavLink,
  // useParams,
  // withRouter
} from "react-router-dom";



function App() {
  return (
    <>
    <Router>
    <ScrollToTop>
      <Navbar></Navbar>
      <Switch>
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/works" exact component={Works} />
          <Route path="/works/00" exact component={Work01}/>
          <Route path="/works/01" exact component={Work02}/>
          <Route path="/about" exact component={About} />
          <Route path="/lab" exact component={Lab} />
        </div>
      </Switch>
      <Footer />
      </ScrollToTop>
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