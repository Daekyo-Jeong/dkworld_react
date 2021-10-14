import React, {useState, useEffect} from 'react'
import './Navbar.css';
import {
    Link
  } from "react-router-dom";


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    // const handleClick = () => setClick(!click);
    const handleClick = function(){
        setClick(!click);
    }

    const closeMobileMenu = () => setClick(false);

    // const showButton = () => {
    //     if(window.innerWidth <= 960){
    //         setButton(false);
    //     } else {
    //         setButton(true);
    //     }
    // };

    // useEffect(() => {
    //     showButton();
    // },);

    // window.addEventListener('resize', showButton);
    

    return(   
        <nav className="nav">
                <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
                    <span className="nav-logo__dk">dk</span><span className="nav-logo__w">_w</span>_rld.
                    <span className="nav-logo__o">o</span>
                </Link>
                
                {/* 클릭시 클래스명을 변경하여 CSS속성을 변경하는 토글 스위치 */}
                <div className="nav-menu-button" onClick={handleClick}>
                    <p className={click ? 'nav-menu-button--open' : 'nav-menu-button--close'}>menu</p>
                </div>
                <ul className={click ? 'nav-menu nav-menu--open' : 'nav-menu nav-menu--close'}>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                            about.
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/works" className="nav-links" onClick={closeMobileMenu}>
                            works.
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/lab" className="nav-links-mobile" onClick={closeMobileMenu}>
                            lab.
                        </Link>
                    </li>
                </ul>
                <div onClick={closeMobileMenu} className={click ? "nav-menu-background nav-menu-background--open" : 'nav-menu-background nav-menu-background--close'}></div>
                {/* {button && <Button buttonStyle="btn--outline">Sign up</Button>} */}
        </nav>
    )
}

export default Navbar;