import React from 'react';
import {Link} from 'react-router-dom';
import './GridCard.css';

function GridCardItem({title, path, label, src}) {
    return (
        <>
            <li className="grid-card-item">
                <Link className="grid-card-item__link" to={path}>   
                <div className="grid-card-item__info">
                    <h2 className="grid-card-item__info__title">{title}</h2>
                </div>
                <figure className="grid-card-item__img-wrap" data-category={label}>
                    <img src={src} alt={title} className="grid-card-item-img" />
                </figure>
                </Link>
                
            </li> 
        </>
    )
}

export default GridCardItem;
