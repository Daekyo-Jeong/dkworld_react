import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useParams
  } from "react-router-dom";

  var contents = [
    {id:1, title: "HTML", desc:"HTML is..."},
    {id:2, title: "JS", desc:"JS is..."},
    {id:3, title: "REACT", desc:"REACT is..."}
  ]
  
  function Topic(){
    var params = useParams();
    var topic_id = params.topic_id;
    var seleted_topic = {
      title:"Sorry",
      desc:"Not Found"
    }
    for(var i=0; i<contents.length; i++){
      if(contents[i].id === Number(topic_id)){
        seleted_topic = contents[i];
        break;
      }
    }
  
    console.log(params);
  
    return(
      <>
        <h3>{seleted_topic.title}</h3>
        <p>{seleted_topic.desc}....</p>
      </>
    );
  }
  
  function Topics(){
    var list = [];
    for(var i=0; i<contents.length; i++){
      list.push(
      <li key={contents[i].id}>
        <NavLink to={'/topics/'+contents[i].id}>
          {contents[i].title}
        </NavLink>
      </li>)
    }
  
    return(
      <>
      <h2>Topics</h2>
      <ul>
        {list}
      </ul>
      <Route path="/topics/:topic_id">
        <Topic></Topic>
      </Route>
      {/* <Switch>
        <Route path="/topics/1">HTML is...</Route>
        <Route path="/topics/2">JS is...</Route>
        <Route path="/topics/3">REACT is...</Route>
      </Switch> */}
      </>
    );
  }

  function Contact(){
    return(
      <>
      <h2>Contact</h2>
      <p>Contact..</p>
      </>
    );
  }

  function Home(){
    return(
      <>
      <h2>Home</h2>
      <p>Home..</p>
      </>
    );
  }

  function RouteTest(){

    return(
      <>
      {/* NavLink는 선택된 ui에 active라는 클래스를 추가하도록 되어있음.
      따라서, css를 변경해서 navigation 이 가능해짐. */}
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/topics">Topics</NavLink></li>
        <li><NavLink exact to="/contact">Contact</NavLink></li>
      </ul>
      {/* 라우터와 일치하는 path를 가진 컴포넌트는 화면에 출력된다. 
      exact path를 사용하면 정확히 동일한 경우에만 작동한다 */}
      {/* 스위치로 컴포넌트를 감싸면, 가장 먼저 감지되는 컨텐츠만 화면에 출력한다. 
      편법으로, 홈을 제일 뒤에 주면 가능 동일하지 않은 것들을 not found로 출력가능*/}
      <Switch>
        <Route exact path="/"><Home></Home></Route>
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
        <Route path="/">Not Found</Route>
      </Switch>
      </>
    );
  }

  export default RouteTest;