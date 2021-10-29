import React from 'react';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Works from './components/pages/Works';
//dk_w_rld
import Work01 from './components/pages/Works/Work01';
//breathe
import Work02 from './components/pages/Works/Work02';
//food a capella
import Work03 from './components/pages/Works/Work03';
//lima olympic
import Work04 from './components/pages/Works/Work04';
//universe
import Work05 from './components/pages/Works/Work05';
//salt factory
import Work06 from './components/pages/Works/Work06';
//moonecklace
import Work07 from './components/pages/Works/Work07';
import About from './components/pages/About';
import Lab from './components/pages/Lab';
import Lab01 from './components/pages/Labs/Labs01';
import Lab02 from './components/pages/Labs/Labs02';
import Lab03 from './components/pages/Labs/Labs03';
import Lab04 from './components/pages/Labs/Labs04';

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
        <>
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/works" exact component={Works} />
          <Route path="/works/01" exact component={Work01}/>
          <Route path="/works/02" exact component={Work02}/>
          <Route path="/works/03" exact component={Work03}/>
          <Route path="/works/04" exact component={Work04}/>
          <Route path="/works/05" exact component={Work05}/>
          <Route path="/works/06" exact component={Work06}/>
          <Route path="/works/07" exact component={Work07}/>
          <Route path="/about" exact component={About} />
          <Route path="/lab" exact component={Lab} />
          <Route path="/lab/01" exact component={Lab01} />
          <Route path="/lab/02" exact component={Lab02} />
          <Route path="/lab/03" exact component={Lab03} />
          <Route path="/lab/04" exact component={Lab04} />
          {/* 
          링크가 일치하지 않을 경우 404 페이지 
          <Route component={}/> */}
        </div>
        </>
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