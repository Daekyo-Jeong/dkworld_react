import React from 'react';
import {Link} from 'react-router-dom';

function Carditem({align, path, src, title, label, num, text}) {
    return (
        <>
            <li className={align}>
                <Link className="cards__item__link" to={path}>
                    <figure className="cards__item__pic-wrap" data-category={label}>
                        <img src={src} alt={title} className="cards__item__img" />
                    </figure>
                </Link>
                <Link className="cards__item__info" to={path}>
                    <h3 className="cards__item__num">{num}</h3>
                    <h3 className="cards__item__title">{title}</h3>
                    <h4 className="cards__item__text">{text}</h4>
                </Link>
            </li>
        </>
    )
}

export default Carditem
