import React from 'react'
import '../Lab.css';
import GridCardItem from '../GridCardItem';

const LabList = [
    {
        id: 1,
        title: 'Image Slider',
        path: '/lab/01',
        label: 'react-component',
        src: 'images/dk_w_rld_logo1.jpg',
        type:'labA'
    },
    {
        id: 2,
        title: 'videoControl',
        path: '/lab/02',
        label: 'react-component',
        src: 'images/dk_w_rld_logo2.jpg',
        type:'labB'
    },
    {
        id: 3,
        title: 'languegeSwitch',
        path: '/lab/03',
        label: 'react-function',
        src: 'images/dk_w_rld_logo3.jpg',
        type:'labB'
    },
    {
        id: 4,
        title: 'parallaxScrolling',
        path: '/lab/04',
        label: 'artwork',
        src: 'images/dk_w_rld_logo4.jpg',
        type:'labB'
    },
    {
        id: 5,
        title: 'maracaibo',
        path: '/lab/05',
        label: 'boardgame',
        src: 'images/dk_w_rld_logo5.jpg',
        type:'labB'
    },
    {
        id: 6,
        title: 'agricola',
        path: '/lab/06',
        label: 'boardgame',
        src: 'images/dk_w_rld_logo6.jpg',
        type:'labB'
    },
    {
        id: 7,
        title: 'spacecrew',
        path: '/lab/07',
        label: 'boardgame',
        src: 'images/dk_w_rld_logo7.jpg',
        type:'labB'
    },
    {
        id: 8,
        title: 'burgendy',
        path: '/lab/08',
        label: 'boardgame',
        src: 'images/dk_w_rld_logo8.jpg',
        type:'labB'
    },
    {
        id: 9,
        title: 'terraforming mars',
        path: '/lab/09',
        label: 'boardgame',
        src: 'images/dk_w_rld_logo9.jpg',
        type:'labB'

    }
];

const renderLabs = (labCardItem) => {
    return(
        <GridCardItem 
            id={labCardItem.id}
            title={labCardItem.title}
            path={labCardItem.path}
            label={labCardItem.label}
            src={labCardItem.src}
            type={labCardItem.type}
            />
    );
}

function Lab() {
    return (
        <div className="lab">
                <div className="lab-info">
                    <h1 className="lab-title">Lab.</h1>
                    <div className="lab-introduce">
                        <p>이 곳은 연구실입니다.</p>
                        <p>연구 중인 내용을 기록하고 보관합니다.</p>
                    </div>
                </div>
            <div className="lab-grid">
                {LabList.map(renderLabs)}
            </div>
        </div>
    )
}

export default Lab;
