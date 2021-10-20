
import React, {useEffect, useState, useRef} from 'react'
import './ImageSlider.css'

function ImageSlider({img, list}){
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideNum, setSlideNum] = useState(1);
    const slideRef = useRef(null);

    const handleSlideNext = () => {
        if(currentSlide >= list-1){
            setCurrentSlide(0);
            setSlideNum(1);
        } else{
            setCurrentSlide(currentSlide + 1);
            setSlideNum(slideNum + 1);
        }
        console.log("next");
    }
    const handleSlidePrev = () => {
        if(currentSlide === 0){
            setCurrentSlide(list-1);
            setSlideNum(list);
        } else {
            setCurrentSlide(currentSlide - 1);
            setSlideNum(slideNum - 1);
        }
        console.log("prev");
    }

    useEffect(() => {
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    },[currentSlide]);

    return(
        <div className="image-slider-wrap">
            <div className="image-slider" ref={slideRef}>
            {img.map((image)=>{
                return <img key={image.id} src={image.src} alt="some" />    
            })}            
            </div>
            <p className="image-slider__nav">{`${slideNum}/${list}`}</p>
            <button className="image-slider__button image-slider__button--right" onClick={handleSlideNext} value="next">next</button>
            <button className="image-slider__button image-slider__button--left" onClick={handleSlidePrev} value="prev">prev</button>
        </div>
    );
}

export default ImageSlider
