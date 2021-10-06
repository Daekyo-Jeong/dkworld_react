import React, {useEffect, useState} from 'react'
import { debounce } from 'lodash';

const SIZES = {
    over: 'work-img--oversize',
    max: 'work-img--maxsize',
    card: 'work-img--cardsize'
};

var imgbox = null;

function WorkImageBox({src, size}) {
    const imgSize = SIZES[size];
    var blanksize = {};

    if(window.innerWidth <= 960){
        blanksize = {
            height : (window.innerWidth*9)/16 + 50
        };
        
    } else if (window.innerWidth > 960){
        blanksize = {
            height : (window.innerWidth*9)/16 + 170
        };
    }

    const [blank, setBlank] = useState(blanksize);

    //실시간으로 화면 변경될 때 마다 사이즈 변경하는 것으로 했더니 과부화 걸림
    //너무 잦은 반복으로 화면을 렌더링 해서 그런 듯
    //resizeBlankbox 함수를 debounce로 감싸고, 1000ms 동안 반복되지 않도록 설정
    //가장 마지막에 실행된 동일한 함수만을 적용한다.
    const resizeBlankbox = debounce(() => {
        console.log(blanksize.marginBottom);
        if(window.innerWidth <= 960){
            blanksize = {
                height : (window.innerWidth*9)/16+50
            };
            setBlank(blanksize);
        } else if (window.innerWidth > 960){
            blanksize = {
                height : (window.innerWidth*9)/16+170
            };
            setBlank(blanksize);
        }
    }, 500);
    
    useEffect(()=> {
        window.addEventListener('resize', resizeBlankbox);
        return() => {
            window.removeEventListener('resize', resizeBlankbox);
        }
    }, []);


    if(size==='over'){
        imgbox = 
        <>
        <img className={imgSize} src={src} alt="Work"/>
        <div className="blank" style={blank}></div>
        </>

    } else if(size==='max' || 'card') {
        imgbox = <img className={imgSize} src={src} alt="Work" />
    } else {
        imgbox = null;
    }
    return (
        <>
        {imgbox}
        </>
    )
}

export default WorkImageBox;