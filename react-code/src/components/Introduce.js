import React from 'react'
import './Introduce.css';
import {Link} from 'react-router-dom';

function Introduce() {
    return (
        <div className="introduce">
          <p className="introduce__text">
            Hi, guys, 😁 <br />
            I'm <Link to="/about" className="introduce__text__link">Daekyo Jeong. </Link><br />
            thx u for visiting my website. 🙏 <br /><br />

            I based in Seoul. 🇰🇷<br />
            I studied interaction design. 🎨<br />
            </p>
            <div className="introduce__contact">
                <h2>Contact</h2>
                <h3>dk_w_rld@naver.com</h3>
            </div>
        </div>
    )
}

export default Introduce;
