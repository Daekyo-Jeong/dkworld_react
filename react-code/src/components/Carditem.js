import React from 'react';
import {Link} from 'react-router-dom';

function Carditem(props) {
    return (
        <>
            <li className={props.align}>
                <Link className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt={props.title} className="cards__item__img" />
                    </figure>
                </Link>
                <div className="cards__item__info">
                    <h3 className="cards__item__num">{props.num}</h3>
                    <h3 className="cards__item__title">{props.title}</h3>
                    <h4 className="cards__item__text">{props.text}</h4>
                </div>
            </li>
        </>
    )
}

export default Carditem
