import React, { useState } from 'react'
import './Footer.css';

function toggleTranslateLanguege(event){
    
}

function Footer() {
    var koreanLang = document.getElementsByClassName('--ko');
    var englishLang = document.getElementsByClassName('--en');

    const ko = () => {
        for(var i =0; i < koreanLang.length; i++){
            console.log(koreanLang.length);
            // var item = koreanLang.item(i);
            // var item2 = englishLang.item(i);
            // item.style.display = "block";
            // item2.style.display = "none";
        }
    };

    const en = () => {
        for(var i =0; i < koreanLang.length; i++){
            console.log(englishLang.length);
            // koreanLang[i].style.display = "none";
            // englishLang[i].style.display = "block";
        }
    };

    return (
        <>
        <div className="footer">
            <div className="footer__left">
                <p>All rights ⓒ Daekyo Jeong</p>
                <p>Daekyo Jeong | dk_world | Salt Factory | Seoul | 2014 - 2021</p>
            </div>
            <div className="footer__right">
                <p lang="ko" className="footer__right__button" onClick={ko}>한국어</p>
                <p className="footer__right__button" onClick={en}>English</p>
            </div>
        </div>
        </>
    )
}

export default Footer
