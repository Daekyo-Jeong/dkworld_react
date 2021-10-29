import React from 'react'
import {
    Link
  } from "react-router-dom";

import Carditem from './Carditem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <div className="cards__container">
                <ul className="cards__items">
                    <Carditem
                    align="cards__item leftalign"
                    src="images/dk_w_rld_logo1.jpg"
                    num="01"
                    title="dk_w_rld"
                    
                    // desc="this works blbl lorem ipsum"
                    label="development"
                    path="/works/01"
                    />
                    <Carditem
                    align="cards__item rightalign"
                    src='images/works_images/cover/breathe.png'
                    num="02"
                    title="breathe"
                    // desc="this works blbl lorem ipsum"
                    label="branding"
                    path="/works/02"
                    />
                    <Carditem
                    align="cards__item leftalign"
                    src="images/works_images/cover/foodacappella.png"
                    num="03"
                    title="Food A Cappella"
                    
                    // desc="this works blbl lorem ipsum"
                    label="artwork"
                    path="/works/03"
                    />
                    <Carditem
                    align="cards__item rightalign"
                    src='images/works_images/cover/saltfactory.png'
                    num="04"
                    title="Salt Factory"
                    // desc="this works blbl lorem ipsum"
                    label="media art"
                    path="/works/06"
                    />
                </ul>
                <p className="cards-link"><Link to="/works"> 작품 더보기</Link></p>
            </div>
        </div>
    )
}

export default Cards
