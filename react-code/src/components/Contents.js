import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, useParams } from "react-router-dom";

var contentsData = [
    {id: 1, title:"First title", date:"2021.09.", desc:"First blavla"},
    {id: 2, title:"Second title", date:"2021.09.", desc:"Second blavla"},
    {id: 3, title:"Third title", date:"2021.09.", desc:"Third blavla"}
];

function Contents(props) {

    var lists = [];
    var i = 0;

    for (i=0; i < contentsData.length; i++){
      lists.push(
        <div className = "list">
          <Link to={"/contents/"+contentsData[i].id}><h3>{contentsData[i].title}</h3></Link>
          <p>{contentsData[i].date}{10+i}</p>
          <hr/>
        </div>
      )
    }

    return(
      <>
      {lists}
      </>
    );
  }

  export default Contents;