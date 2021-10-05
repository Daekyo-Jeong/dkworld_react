import React, {useEffect, useRef} from 'react'

const SIZES = {
    over: 'work-img--oversize',
    max: 'work-img--maxsize',
    card: 'work-img--cardsize'
};

var imgbox = null;

function WorkImageBox({src, size}) {
    const imgSize = SIZES[size];
    const workImgBox = useRef(null);

    var blanksize = {};

    if(window.innerWidth <= 960){
        blanksize = {
            marginBottom : (window.innerWidth*9)/16 + 180
        };
    } else if (window.innerWidth > 960){
        blanksize = {
            marginBottom : (window.innerWidth*9)/16 + 270
        };
    }

    useEffect(() => {
        console.log(window.innerWidth);
    })

    const resizeBlankbox = () => {
        console.log("hello world");
        if(window.innerWidth <= 960){
            blanksize = {
                marginBottom : (window.innerWidth*9)/16 + 180
            };
        } else if (window.innerWidth > 960){
            blanksize = {
                marginBottom : (window.innerWidth*9)/16 + 270
            };
        }
    }

    window.addEventListener('resize', resizeBlankbox);

    if(size==='over'){
        imgbox = 
        <>
        <img ref={workImgBox} className={imgSize} src={src} alt="Work Image" width={window.innerWidth}/>
        <div className="blank" style={blanksize}></div>
        </>

    } else if(size==='max' || 'card') {
        imgbox = <img ref={workImgBox} className={imgSize} src={src} alt="Work Image" />
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
