//react-compoment-videoControl
import React from 'react'

const videoStyle = {
    width: "100%"
}

const VideoTest = () => {
    return(
        <>
        <video style={videoStyle} controls>
            <source src="../../videos/breathe_website_usage_mov.mov" type="video/mp4" />
        </video>
        </>
    );
};

function Labs02() {
    return (
        <>
        <h1>videoControl</h1>
        <h1>비디오 컨트롤</h1>
        <br />
        <h2>example</h2>
        <h2>예시</h2>
            <VideoTest/>
        </>
    )
}

export default Labs02
