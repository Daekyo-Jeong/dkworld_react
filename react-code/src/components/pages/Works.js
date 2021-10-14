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
        title: 'Breathe',
        path: '/works/01',
        label: 'branding',
        src: 'images/works_images/breathe.jpg'
    },
    {
        id: 3,
        title: 'Food a Cappella',
        path: '/works/02',
        label: 'artwork',
        src: 'images/dk_w_rld_logo3.jpg'
    },
    {
        id: 4,
        title: 'LIMA Olympic',
        path: '/works/03',
        label: 'branding',
        src: 'images/dk_w_rld_logo4.jpg'
    },
    {
        id: 5,
        title: 'Universe',
        path: '/works/04',
        label: 'artwork',
        src: 'images/dk_w_rld_logo5.jpg'
    },
    {
        id: 6,
        title: 'Neon',
        path: '/works/05',
        label: 'artwork',
        src: 'images/dk_w_rld_logo6.jpg'
    },
    {
        id: 7,
        title: 'Salt Factory',
        path: '/works/06',
        label: 'media art',
        src: 'images/dk_w_rld_logo7.jpg'
    },
    {
        id: 8,
        title: 'Moonecklace',
        path: '/works/07',
        label: 'artwork',
        src: 'images/dk_w_rld_logo8.jpg'
    },
    {
        id: 9,
        title: 'Fiit',
        path: '/works/08',
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
