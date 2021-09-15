import React from 'react'
import Carditem from './Carditem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>This is my works</h1>
            <div className="cards__container">
                <ul className="cards__items">
                    <Carditem
                    src="images/img-9.jpeg"
                    text="this is world "
                    // desc="this works blbl lorem ipsum"
                    label="branding"
                    path="/works"
                    />
                    <Carditem
                    src="images/img-9.jpeg"
                    text="tw_rlddk__w_rdfasdasdsdflddk_w_rld"
                    // desc="this works blbl lorem ipsum"
                    label="branding"
                    path="/works"
                    />
                </ul>
                <ul className="cards__items">
                    <Carditem
                    src="images/img-9.jpeg"
                    text="dk_w_rlddk_w_rlddk_w_lddk_w_rld"
                    // desc="this works blbl lorem ipsum"
                    label="branding"
                    path="/works"
                    />
                    <Carditem
                    src="images/dk_w_rld_logo1.jpg"
                    text="tw_rlddk__w_rlddk_w_rld"
                    // desc="this works blbl lorem ipsum"
                    label="branding"
                    path="/works"
                    />
                     <Carditem
                    src="images/dk_w_rld_logo1.jpg"
                    text="tw_rlddk__w_rlddk_w_rld"
                    // desc="this works blbl lorem ipsum"
                    label="branding"
                    path="/works"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Cards
