import React from 'react'
import './Introduce.css';
import {Link} from 'react-router-dom';

function Introduce() {
    return (
        <div className="introduce">
          <p className="introduce__text">
            안녕하세요. 😁 <br />
            <Link to="/about" className="introduce__text__link">정대교입니다. </Link><br />
            제 웹사이트를 방문해주셔서 감사합니다. 🙏 <br /><br />

            저는 서울에 거주 중입니다. 🇰🇷<br />
            인터랙션 디자인에 대해서 공부하고 있습니다. 🎨<br />
            </p>
            <div className="introduce__contact">
                <h2>Contact</h2>
                <h3>dk_w_rld@naver.com</h3>
            </div>
        </div>
    )
}

export default Introduce;
