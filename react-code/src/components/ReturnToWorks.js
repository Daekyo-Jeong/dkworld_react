import React from 'react';
import {
    Link
  } from "react-router-dom";

function ReturnToWorks() {
    return (
        <div className="work-return-button--center-wrap">  
        <Link to="/works" className="work-return-button--center">to Works</Link>
        </div>
    )
}

export default ReturnToWorks
