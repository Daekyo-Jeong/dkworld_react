import React from 'react'
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
                    src="images/dk_w_rld_logo2.jpg"
                    num="02"
                    title="breathe"
                    // desc="this works blbl lorem ipsum"
                    label="branding"
                    path="/works/02"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Cards
