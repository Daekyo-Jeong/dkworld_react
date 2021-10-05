import React from 'react';
import GridCardItem from '../GridCardItem';
import '../../components/Works.css';

const worksList = [
    {
        id: 1,
        title: 'dk_w_rld',
        path: '/works/00',
        label: 'development',
        src: 'images/dk_w_rld_logo1.jpg'
    },
    {
        id: 2,
        title: 'helloworld',
        path: '/works/01',
        label: 'branding',
        src: 'images/dk_w_rld_logo2.jpg'
    },
    {
        id: 3,
        title: 'reactmap',
        path: '/works/02',
        label: 'UX/UI',
        src: 'images/dk_w_rld_logo3.jpg'
    },
    {
        id: 4,
        title: 'sometitle',
        path: '/works/03',
        label: 'artwork',
        src: 'images/dk_w_rld_logo4.jpg'
    },
    {
        id: 5,
        title: 'kimchijjigea',
        path: '/works/04',
        label: 'boardgame',
        src: 'images/dk_w_rld_logo5.jpg'
    },
    {
        id: 6,
        title: 'agricola',
        path: '/works/05',
        label: 'boardgame',
        src: 'images/dk_w_rld_logo6.jpg'
    },
    {
        id: 7,
        title: 'spacecrew',
        path: '/works/06',
        label: 'boardgame',
        src: 'images/dk_w_rld_logo7.jpg'
    },
    {
        id: 8,
        title: 'burgendy',
        path: '/works/06',
        label: 'boardgame',
        src: 'images/dk_w_rld_logo8.jpg'
    },
    {
        id: 9,
        title: 'Fiit',
        path: '/works/06',
        label: 'boardgame',
        src: 'images/dk_w_rld_logo9.jpg'
    }
];

function renderWorks(gridCardItem){
    return (
        <GridCardItem 
        key={gridCardItem.id}
        title={gridCardItem.title}
        path={gridCardItem.path}
        label={gridCardItem.label}
        src={gridCardItem.src}/>    
    );
}

function Works() {
    return (
        <div className="works">
         {worksList.map(renderWorks)}
        </div>
    )
}

export default Works
