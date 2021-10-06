import React from 'react'
import '../Lab.css';
import GridCardItem from '../GridCardItem';

const LabList = [
    {
        id: 1,
        title: 'dk_w_rld',
        path: '/lab/00',
        label: 'development',
        src: 'images/dk_w_rld_logo1.jpg'
    },
    {
        id: 2,
        title: 'helloworld',
        path: '/lab/01',
        label: 'branding',
        src: 'images/dk_w_rld_logo2.jpg'
    },
    {
        id: 3,
        title: 'reactmap',
        path: '/lab/02',
        label: 'UX/UI',
        src: 'images/dk_w_rld_logo3.jpg'
    },
    {
        id: 4,
        title: 'sometitle',
        path: '/lab/03',
        label: 'artwork',
        src: 'images/dk_w_rld_logo4.jpg'
    },
    {
        id: 5,
        title: 'kimchijjigea',
        path: '/lab/04',
        label: 'boardgame',
        src: 'images/dk_w_rld_logo5.jpg'
    },
    {
        id: 6,
        title: 'agricola',
        path: '/lab/05',
        label: 'boardgame',
        src: 'images/dk_w_rld_logo6.jpg'
    },
    {
        id: 7,
        title: 'spacecrew',
        path: '/lab/06',
        label: 'boardgame',
        src: 'images/dk_w_rld_logo7.jpg'
    },
    {
        id: 8,
        title: 'burgendy',
        path: '/lab/06',
        label: 'boardgame',
        src: 'images/dk_w_rld_logo8.jpg'
    },
    {
        id: 9,
        title: 'Fiit',
        path: '/lab/06',
        label: 'boardgame',
        src: 'images/dk_w_rld_logo9.jpg'
    }
];

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
                {LabList.map(labCardItem => {
                    return(
                        <GridCardItem 
                            id={labCardItem.id}
                            title={labCardItem.title}
                            path={labCardItem.path}
                            label={labCardItem.label}
                            src={labCardItem.src}
                            />
                    );
                })}
            </div>
        </div>
    )
}

export default Lab;
