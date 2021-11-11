//react-compoment-videoControl
import React from 'react';
import LabIntro from '../../LabIntro';

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
        <LabIntro
        titlee="videoControl"
        titlek="비디오 컨트롤"
        funcdesc=""
        updatedesc={`2021.10.19 - demo`}/>
        <VideoTest/>
        </>
    )
}

export default Labs02
