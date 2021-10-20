import React from 'react';
import GridCardItem from '../GridCardItem';
import '../../components/Works.css';

const worksList = [
    {
        id: 1,
        title: 'dk_w_rld',
        path: '/works/01',
        label: 'development',
        src: 'images/dk_w_rld_logo1.jpg',
        type:'work'
    },
    {
        id: 2,
        title: 'Breathe',
        path: '/works/02',
        label: 'branding',
        src: 'images/works_images/breathe.jpg',
        type:'work'
    },
    {
        id: 3,
        title: 'Food a Cappella',
        path: '/works/03',
        label: 'artwork',
        src: 'images/dk_w_rld_logo3.jpg',
        type:'work'
    },
    {
        id: 4,
        title: 'LIMA Olympic',
        path: '/works/04',
        label: 'branding',
        src: 'images/works_images/lima/lima-logo-7.0.png',
        type:'work'
    },
    {
        id: 5,
        title: 'Universe',
        path: '/works/05',
        label: 'artwork',
        src: 'images/dk_w_rld_logo5.jpg',
        type:'work'
    },
    {
        id: 6,
        title: 'Neon',
        path: '/works/06',
        label: 'artwork',
        src: 'images/dk_w_rld_logo6.jpg',
        type:'work'
    },
    {
        id: 7,
        title: 'Salt Factory',
        path: '/works/07',
        label: 'media art',
        src: 'images/dk_w_rld_logo7.jpg',
        type:'work'
    },
    {
        id: 8,
        title: 'Moonecklace',
        path: '/works/08',
        label: 'artwork',
        src: 'images/dk_w_rld_logo8.jpg',
        type:'work'
    },
    {
        id: 9,
        title: 'Fiit',
        path: '/works/09',
        label: 'boardgame',
        src: 'images/dk_w_rld_logo9.jpg',
        type:'work'
    }
];

function renderWorks(gridCardItem){
    return (
        <GridCardItem 
        key={gridCardItem.id}
        title={gridCardItem.title}
        path={gridCardItem.path}
        label={gridCardItem.label}
        src={gridCardItem.src}
        type={gridCardItem.type}/>    
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
