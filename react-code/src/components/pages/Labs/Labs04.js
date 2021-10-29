import React, {useState, useEffect} from 'react';
import LabIntro from '../../LabIntro';

    function ParallexScrolling(){
        const [scrollPostion, setScrollPosition] = useState(0);

        function onScroll(){
            setScrollPosition(window.scrollY);
        }

        useEffect(() => {
            window.addEventListener("scroll", onScroll);
            return () => {
                window.removeEventListener("scroll", onScroll);
            }
        },[]);

        return(
        <div style={{
            width : '100vw',
            overflow : 'hidden',
            margin : '0 auto',
            marginLeft: 'calc(-50vw + 50%)'
        }}>
            <div style={{
                width: '1200px',
                margin : '0 auto',
            }}>
                <div className="lab4-redbox" style={{
                    backgroundColor : 'red',
                    width : '500px',
                    height : '500px',
                    backgroundPositionX : scrollPostion ,
                    margin : '0 auto',
                    transform : `translateX(${scrollPostion*2}px)`,
                    transition : '.5s ease all'
                }}></div>
                <div className="lab4-textbox" style={{
                    width : '500px',
                    height : '500px',
                    margin : '0 auto',
                    transform : `translateX(-${scrollPostion-150}px)`,
                    transition : '.5s ease all'
                }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div> 
                <div className="lab4-bluebox" style={{
                    backgroundColor : 'blue', 
                    width : '500px',
                    height : '500px',
                    margin : '0 auto',
                    transform : `translateX(-${(scrollPostion*2)-700}px)`,
                    transition : '.5s ease all'
                }}></div>
                
            </div>
        </div>
        )
    }

    function Labs04() {
    return (
        <>
        <LabIntro
        titlee="parallexScrolling"
        titlek="페럴렉스 스크롤링"
        funcdesc="스크롤 위치에 따라서, 컴포넌트의 CSS가 변경되어 동적 UI로 구성 가능"
        updatedesc={`2021.10.25 - demo`}/>
        <ParallexScrolling></ParallexScrolling>
        </>
        );
    }

export default Labs04
