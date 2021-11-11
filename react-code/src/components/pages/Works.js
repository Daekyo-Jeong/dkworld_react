import React from 'react';
import GridCardItem from '../GridCardItem';
import '../../components/Works.css';

const worksList = [
    {
        id: 'work1',
        title: 'dk_w_rld',
        path: '/works/01',
        label: 'development',
        src: 'images/dk_w_rld_logo1.jpg',
        type:'work'
    },
    {
        id: 'work2',
        title: 'Breathe',
        path: '/works/02',
        label: 'branding',
        src: 'images/works_images/cover/breathe.png',
        type:'work'
    },
    {
        id: 'work3',
        title: 'Salt Factory',
        path: '/works/03',
        label: 'media art',
        src: 'images/works_images/cover/saltfactory.png',
        type:'work'
    },
    {
        id: 'work4',
        title: 'Moonecklace',
        path: '/works/04',
        label: 'artwork',
        src: 'images/works_images/cover/moonecklace.png',
        type:'work'
    },
    {
        id: 'work5',
        title: 'Food a Cappella',
        path: '/works/05',
        label: 'artwork',
        src: 'images/works_images/cover/foodacappella.png',
        type:'work'
    },
    {
        id: 'work6',
        title: 'Universe',
        path: '/works/06',
        label: 'artwork',
        src: 'images/works_images/cover/universe.png',
        type:'work'
    },
    {
        id: 'work7',
        title: 'LIMA Olympic',
        path: '/works/07',
        label: 'branding',
        src: 'images/works_images/cover/limaolympic.png',
        type:'work'
    },
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
        <>
            <div className="works-info">
                    <h1 className="works-title">Works.</h1>
                    <div className="works-introduce">
                        <p></p>
                        <p>작품 이미지를 클릭하면 자세한 내용을 확인할 수 있습니다.</p>
                    </div>
            </div>
        <div className="works-grid">
         {worksList.map(renderWorks)}
        </div>
        </>
    )
}

export default Works
