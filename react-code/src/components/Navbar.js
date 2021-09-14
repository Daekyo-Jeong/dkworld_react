import React, {useState, useEffect} from 'react'
import './Navbar.css';
import Button from './Button'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useParams
  } from "react-router-dom";


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    // const handleClick = () => setClick(!click);
    const handleClick = function(){
        setClick(!click);
    }

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    },);

    window.addEventListener('resize', showButton);
    

    return(
        <>
            <nav className="navbar">
                <div className="navbar-contatiner">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        DKsladkfjlask
                    </Link>
                    {/* 클릭시 클래스명을 변경하여 CSS속성을 변경하는 토글 스위치 */}
                    <div className="menu-icon" onClick={handleClick}>
                        <p className={click ? 'openmenu' : 'closedmenu'}>menu</p>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">Sign up</Button>}
                </div>        
            </nav>
        </>
    )
}

export default Navbar;