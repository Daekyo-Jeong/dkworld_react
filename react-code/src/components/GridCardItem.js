import React from 'react';
import {Link} from 'react-router-dom';
import './GridCard.css';

const TYPES = {
    work: 'grid-card-item__img__work-wrap',
    labA: 'grid-card-item__img__lab-app-wrap',
    labB: 'grid-card-item__img__lab-wrap'
};

function GridCardItem({id, title, path, label, src, type}) {
    const itemType = TYPES[type];
    return (
        <>
            <li key={id} className="grid-card-item">
                <Link className="grid-card-item__link" to={path}>   
                <div className="grid-card-item__info">
                    <h2 className="grid-card-item__info__title">{title}</h2>
                </div>
                <figure className={itemType+" grid-card-item__img-wrap"} data-category={label}>
                    <img src={src} alt={title} className="grid-card-item-img" />
                </figure>
                </Link>
            </li> 
        </>
    )
}

export default GridCardItem;
